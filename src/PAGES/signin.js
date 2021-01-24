import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../CONTEXT/firebase'
import { HeaderContainer, FooterContainer } from '../CONTAINERS';
import { Form } from '../COMPONENTS';
import * as ROUTES  from '../CONSTANTS/routes';

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [togglePolicy, setTogglePolicy] = useState(false)

    const isInvalid = password === '' || email === '';

    const handleSignIn = e => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch(error => {
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
                        Sign In
                    </Form.Title>
                    {error && <Form.Error>{error}</Form.Error> }

                    <Form.Base onSubmit={handleSignIn} method="POST">
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
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>


                    <Form.Text>
                        New to Netflix?&nbsp;
                            <Form.Link to={ROUTES.SIGNUP}>
                                Sign up now.
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