import React from 'react';
import { Container, Inner, Title } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return(
        <Inner direction={direction}>
            {children}
        </Inner>
    )
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
    return <Title {... restProps}>{children}</Title>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
    return <Container {... restProps}>{children}</Container>;
}

