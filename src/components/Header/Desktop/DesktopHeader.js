import React from 'react';
import Login from '../Icons/Login/Login';
import Cart from '../Icons/Cart/Cart';
import Search from '../Icons/Search/Search';
import Aux from '../../../utilities/ReactAux';
import Logo from '../../Logo/Logo';
import DesktopMenu from '../Menu/Desktop/DesktopMenu';

const DesktopHeader = () => {
  return (
    <Aux>
      <div className="nav-spacer desktop" />
      <div className="container">
        <div className="desktop">
          <Logo />
          <DesktopMenu />
          <div className="iconContainer">
            <Login />
            <Cart />
            <Search />
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default DesktopHeader;
