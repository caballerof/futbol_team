import React from 'react';
import { CityLogo } from '../ui/icons';
import mCityLogo from '../../resources/Resources/images/logos/manchester_city_logo.png';

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo
          link="/"
          width="70px"
          height="70px"
          background={`url(${mCityLogo})`}
        />
      </div>
      <div className="footer_discl">
        Manchester city 2018. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
