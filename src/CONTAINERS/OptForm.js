import React from 'react';
import { OptForm } from '../COMPONENTS'
  
export function OptFormContainer() {
    return(
        <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart you membership</OptForm.Text>
            <OptForm.Input placeholder="Email address"/>
        </OptForm>
    )
};