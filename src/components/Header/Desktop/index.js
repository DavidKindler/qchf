import React from 'react';
import Login from '../Login';
import Aux from '../../../utilities/ReactAux';
import Logo from '../../Logo';
import MegaMenuDesktop from '../MegaMenu/Desktop';

const Desktop = () => {
  return (
    <Aux>
      <div className="nav-spacer desktop" />
      <div className="container">
        <div className="desktop">
          <Logo />
          <MegaMenuDesktop />
          <Login />
        </div>
      </div>
    </Aux>
  );
};

export default Desktop;
