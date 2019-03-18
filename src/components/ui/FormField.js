import React from 'react';
import PropTypes from 'prop-types';

const FormField = props => {
  const { id, formData, change } = props;
  const { element, config, valid, validation } = formData;

  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {validation && !valid ? formData.validationMessage : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;
    switch (element) {
      case 'input':
        formTemplate = (
          <div>
            <input {...config} onChange={event => change({ event, id })} />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  change: PropTypes.func
};

export default FormField;
