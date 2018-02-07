import React from 'react';
import Login from '../Login';
import Aux from '../../../utilities/ReactAux';
import Logo from '../../Logo';

const Desktop = () => {
  return (
    <div className="desktop">
      <Logo />
      Desktop Header<Login />
    </div>
  );
};

export default Desktop;
