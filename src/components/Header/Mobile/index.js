import React from 'react';
import Login from '../Login';
import Logo from '../../Logo';
import Aux from '../../../utilities/ReactAux';
import MegaMenuMobile from '../MegaMenu/Mobile';
const Mobile = () => {
  return (
    <Aux>
      <div className="nav-spacer mobile" />
      <div className="container">
        <div className="mobile">
          <MegaMenuMobile />
          <Logo />
          <Login />
        </div>
      </div>
    </Aux>
  );
};

export default Mobile;
