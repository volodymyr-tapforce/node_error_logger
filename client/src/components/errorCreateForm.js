import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import ErrorFormInput from './errorFormInput';

class ErrorForm extends Component {

    constructor(props){
        super(props);
        this.state={
            anonymous_id:'',
            err_type:'',
            err_message:''
        }
    }
    handleChange = (event)=> {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
    render() {
      return (
        <div style={{width:'100%'}}>
        <Segment >
        <Form>
          <ErrorFormInput name={'anonymous_id'} value={this.state.anonymous_id} handleChange={this.handleChange}></ErrorFormInput>
          <ErrorFormInput name={'err_type'} value={this.state.err_type}  handleChange={this.handleChange}></ErrorFormInput>
          <ErrorFormInput name={'err_message'} value={this.state.err_message}  handleChange={this.handleChange}></ErrorFormInput>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
      </div>
      );
    }
  }
  
  export default ErrorForm;