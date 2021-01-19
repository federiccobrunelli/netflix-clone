import React from 'react';
import { Accordion } from '../COMPONENTS'
import faqsData from '../FIXTURES/faqs.json'
  
export function FaqsContainer() {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
};