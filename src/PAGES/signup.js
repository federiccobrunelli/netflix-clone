import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../CONTEXT/firebase'
import { HeaderContainer, FooterContainer } from '../CONTAINERS';
import { Form } from '../COMPONENTS';
import * as ROUTES  from '../CONSTANTS/routes';


export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [togglePolicy, setTogglePolicy] = useState(false)

    const isInvalid = firstName === '' || password === '' || email === '';

    const handleSignUp = e => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch(error => {
                setFirstName('');
                setEmail('');
                setPassword('');
                setError(error.message);
            })

    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>
                        Sign Up
                    </Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user?&nbsp;
                        <Form.Link to={ROUTES.SIGNIN}>
                            Log in now.
                        </Form.Link>
                    </Form.Text>

                    <Form.TextSmall visible={true}>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.&nbsp;
                            <Form.LinkBlueSmall visible={!togglePolicy} onClick={() => setTogglePolicy(togglePolicy => !togglePolicy)}>
                                Learn more.
                            </Form.LinkBlueSmall>
                    </Form.TextSmall>

                    <Form.TextSmall visible={togglePolicy}>
                        The information collected by Google reCAPTCHA is subject to the Google&nbsp;
                        <Form.LinkBlueSmall visible={togglePolicy}>Privacy Policy</Form.LinkBlueSmall> and <Form.LinkBlueSmall visible={togglePolicy}>Terms of Service</Form.LinkBlueSmall>, 
                        and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                    </Form.TextSmall>



                </Form>

            </HeaderContainer>
            <FooterContainer />
        </>
    )
}