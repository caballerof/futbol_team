import React from 'react';
import { Link } from 'react-router-dom';

export const CityLogo = props => {
  const { link, width, height, background } = props;
  const template = (
    <div
      className="img_cover"
      style={{
        width,
        height,
        background
      }}
    />
  );
  if (link) {
    return (
      <Link to={link} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
