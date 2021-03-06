import React, { useState, useContext, createContext } from 'react';
import { Title, Container, Group, SubTitle, Text, Entities, Meta, Image, Item, FeatureText, Feature, FeatureTitle, FeatureClose, Content, Maturity, } from './styles/card';

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider 
      value={{ showFeature, setShowFeature, 
        itemFeature, setItemFeature
      }}>
        <Container {...restProps}>{children}</Container>
      </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>
};

Card.Item = function CardItem({ children, item, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item 
      onClick={() => {
        setItemFeature(item); 
        setShowFeature(true);
      }}
      {...restProps}
      >
        {children}
      </Item>
  )
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps}/>;
};