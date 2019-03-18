import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/FormField';
import { validate } from '../../ui/FormValidate';
import Button from '@material-ui/core/Button';
import { fireBasePromo } from '../../../firebase';

class Enroll extends Component {
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
      fireBasePromo
        .orderByChild('email')
        .equalTo(dataToSubmit.email)
        .once('value')
        .then(snapshot => {
          if (snapshot.val() === null) {
            fireBasePromo.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  resetFormSuccess(type) {
    const newFormData = { ...this.state.formData };
    for (const key in newFormData) {
      newFormData[key].config.value = '';
      newFormData[key].valid = false;
      newFormData[key].validationMessage = '';
    }
    this.setState({
      formError: false,
      formSuccess: type ? 'Congratulation!' : 'e-mail already registered',
      formData: newFormData
    });
    this.cleanSuccessMessage();
  }

  cleanSuccessMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: ''
      });
    }, 5000);
  }

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
    const { formData: { email } = {}, formError, formSuccess } = this.state;
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id="email"
                formData={email}
                change={element => this.updateForm(element)}
              />
              {formError ? this.displayError() : null}
              <div className="success_label">{formSuccess}</div>
              <Button
                onClick={event => this.submitForm(event)}
                variant="contained"
                color="primary"
              >
                Enroll
              </Button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
