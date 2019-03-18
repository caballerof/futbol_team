export const validate = element => {
  const {
    validation: { required },
    validation: { email },
    config: { value }
  } = element;
  let isValid = [true, ''];

  if (email) {
    const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );
    const message = isEmail ? '' : 'Must be a valid email';
    isValid = isEmail ? isValid : [isEmail, message];
  }

  if (required) {
    const isNotEmpty = value.trim() !== '';
    const message = isNotEmpty ? '' : 'this field is required';
    isValid = isNotEmpty ? isValid : [isNotEmpty, message];
  }

  return isValid;
};
