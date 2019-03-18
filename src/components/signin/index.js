import React, { Component } from 'react';
import FormField from '../ui/FormField';
import { validate } from '../ui/FormValidate';
import Button from '@material-ui/core/Button';
import { firebase } from '../../firebase';

class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        config: {
          name: 'email_iput',
          type: 'email',
          placeholder: 'Enter you email',
          value: ''
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        config: {
          name: 'password_iput',
          type: 'password',
          placeholder: 'Enter you password',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ''
      }
    }
  };

  submitForm = event => {
    event.preventDefault();
    let { formData } = this.state;
    let dataToSubmit = {};
    let formIsValid = true;
    for (const key in formData) {
      dataToSubmit[key] = formData[key].config.value;
      formIsValid = formData[key].valid;
    }
    if (formIsValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push('/dashboard');
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  updateForm({ event, id }) {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[id] };
    newElement.config.value = event.target.value;

    let isValid = validate(newElement);

    newElement.valid = isValid[0];
    newElement.validationMessage = isValid[1];

    newFormData[id] = newElement;
    this.setState({
      formError: false,
      formData: newFormData
    });
  }

  displayError = () => (
    <div className="error_label">The form has incorrect information.</div>
  );

  render() {
    const {
      formData: { email } = {},
      formData: { password },
      formError
    } = this.state;
    return (
      <div className="container">
        <div
          className="signin_wrapper"
          style={{
            margin: '100px'
          }}
        >
          <form onSubmit={event => this.submitForm()}>
            <h2>Please Login</h2>
            <FormField
              id="email"
              formData={email}
              change={element => this.updateForm(element)}
            />
            <FormField
              id="password"
              formData={password}
              change={element => this.updateForm(element)}
            />
            {formError ? this.displayError() : null}
            <Button
              onClick={event => this.submitForm(event)}
              variant="contained"
              color="primary"
            >
              Enroll
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
