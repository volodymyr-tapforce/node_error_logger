import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import ErrorForm from './errorCreateForm';

class ErrorModal extends Component {
    render() {
      return (
        <div style={{paddingTop:'10px'}}>
        <Modal trigger={<Button>Create Error</Button>} size={'tiny'}>
        <Modal.Content image>
            <ErrorForm></ErrorForm>
        </Modal.Content>
        </Modal>
        </div>
      );
    }
  }
  
  export default ErrorModal;