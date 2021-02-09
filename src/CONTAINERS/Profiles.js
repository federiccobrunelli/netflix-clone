import React from 'react';
import { Header, Profiles } from '../COMPONENTS'
import * as ROUTES from '../CONSTANTS/routes';
import logo from '../logo.svg';



export function SelectProfileContainer({ user, setProfile }) {
  
  return (
      <>
        <Header bg={false}>
          <Header.Container>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix Logo"/>

          </Header.Container>
        </Header>

        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
              <Profiles.Picture src={user.photoURL} alt={user.displayName} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </>
  )
}
