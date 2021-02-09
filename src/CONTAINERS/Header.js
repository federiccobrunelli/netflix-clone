import React from 'react';
import { Header } from '../COMPONENTS';
import logo from '../logo.svg'

export function HeaderContainer({ children  }) {
    return(
        <Header> 
            <Header.Container>
                <Header.Logo to='/' alt='Netflix Logo' src={logo}/>
                <Header.ButtonLink to='signin'>Sign In</Header.ButtonLink>
            </Header.Container>
            {children}
        </Header>
    )
}