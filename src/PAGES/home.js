import React from 'react';
import { JumbotronContainer, FooterContainer, FaqsContainer, HeaderContainer, OptFormContainer } from '../CONTAINERS';
import { Feature } from '../COMPONENTS'

export const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV <br/> shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <OptFormContainer />
                </Feature>
            </HeaderContainer>
            
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
};