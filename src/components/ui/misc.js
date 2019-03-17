import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Tag = props => {
  const { link, children, addStyle } = props;
  const template = (
    <div
      style={{
        padding: '5px 10px ',
        display: 'inline-block',
        fontFamily: 'Righteous',
        ...addStyle
      }}
    >
      {children}
    </div>
  );
  if (link) {
    return <Link to={link}>{template}</Link>;
  } else {
    return template;
  }
};

Tag.propTypes = {
  addStyle: PropTypes.object,
  link: PropTypes.string
};
