import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, LinkBlueSmall, Input, Submit } from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Error = function Form_Error({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

Form.Title = function Form_Title({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Form.Text = function Form_Text({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Form.TextSmall = function Form_TextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}

Form.Link = function Form_Link({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Form.LinkBlueSmall = function Form_LinkBlueSmall({ children, ...restProps }) {
    return <LinkBlueSmall {...restProps}>{children}</LinkBlueSmall>;
}

Form.Input = function Form_Input({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
}

Form.Submit = function Form_Submit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
}

Form.Base = function Form_Base({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}