import React from 'react';
import { Container, Inner, Item, Title, SubTitle, Image, Pane } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return(
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Pane = function Jumbotron_Pane({ children, ...restProps}) {
    return <Pane {... restProps}>{children}</Pane>;
}

Jumbotron.Title = function Jumbotron_Title({ children, ...restProps}) {
    return <Title {... restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function Jubotron_SubTitle({ children, ...restProps}) {
    return <SubTitle {... restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function Jumbotron_Image({ ...restProps}) {
    return <Image {... restProps}/>;
}

Jumbotron.Container = function Jumbotron_Container({ children, ...restProps}) {
    return <Container {... restProps}>{children}</Container>;
}

