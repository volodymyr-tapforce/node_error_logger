import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

class ErrorForm extends Component {
    render() {
      return (
        <div style={{width:'100%'}}>
        <Segment >
        <Form >
          <Form.Input fluid label='First name' placeholder='First name' width={120} />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
      </div>
      );
    }
  }
  
  export default ErrorForm;