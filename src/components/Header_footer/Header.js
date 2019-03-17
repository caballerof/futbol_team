import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { CityLogo } from '../ui/icons';
import { Link } from 'react-router-dom';
import mCityLogo from '../../resources/Resources/images/logos/manchester_city_logo.png';

export class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          background: '#98c5e9',
          boxShadow: 'none',
          padding: '10px 0',
          borderBottom: '2px solid #00285e'
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CityLogo
                link="/"
                width="70px"
                height="70px"
                background={`url(${mCityLogo})`}
              />
            </div>
          </div>
          <Link to="/the_team">
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/the_marches">
            <Button color="inherit">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
