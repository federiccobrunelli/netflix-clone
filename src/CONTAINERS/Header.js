import React from 'react';
import { Header } from '../COMPONENTS';


export function HeaderContainer({ children  }) {
    return(
        <Header> 
            <Header.Container>
                <Header.Logo to='/' alt='Netflix Logo' src='/images/icons/logo.svg'/>
                <Header.ButtonLink to='signin'>Sign In</Header.ButtonLink>
            </Header.Container>
            {children}
        </Header>
    )
}