import React from 'react';
import { Form } from 'semantic-ui-react'

function ErrorFormInput(props) {
    return <Form.Input fluid label={props.name} value={props.value} placeholder={props.name} name={props.name} onChange={props.handleChange} />
}

export default ErrorFormInput;