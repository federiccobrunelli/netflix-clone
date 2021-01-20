import React from 'react';
import { Accordion, OptForm } from '../COMPONENTS'
import { OptFormContainer } from './OptForm'
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
            <OptFormContainer />
        </Accordion>
    )
};