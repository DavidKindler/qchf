import React from 'react';
import Login from '../Login';
import Logo from '../../Logo';
import Aux from '../../../utilities/ReactAux';
import MegaMenuTablet from '../MegaMenu/Tablet';
const Tablet = () => {
  return (
    <Aux>
      <div className="nav-spacer tablet" />
      <div className="container">
        <div className="tablet">
          <MegaMenuTablet />
          <Logo />
          <Login />
        </div>
      </div>
    </Aux>
  );
};

export default Tablet;
