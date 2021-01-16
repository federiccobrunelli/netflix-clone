import React from 'react';
import jumboData from './fixtures/jumbo.json';
import Jumbotron from './components/jumbotron/index';

export default function App() {
  return (
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron 
            key={item.id}
            direction={item.direction}
          >
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <p>{item.subTitle}</p>
            <p>{item.image}</p>
            <p>{item.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
  );
}