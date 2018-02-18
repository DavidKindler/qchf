import React, { Component } from 'react';
import Search from '../Icons/Search/Search';
import Logo from '../../Logo/Logo';
import Aux from '../../../utilities/ReactAux';
import MobileMenuIcon from '../Menu/Mobile/MobileMenuIcon';
import MobileMenu from '../Menu/Mobile/MobileMenu';

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { megaMenu: false };
  }
  render() {
    const handleMobileMenu = () => {
      this.state = this.setState({
        megaMenu: !this.state.megaMenu
      });
    };
    return (
      <Aux>
        <div className="nav-spacer mobile" />
        <div className="container">
          <div className="mobile">
            <MobileMenuIcon close={this.state.megaMenu} click={handleMobileMenu} />
            <Logo />
            <div className="iconContainer">
              <Search />
            </div>
          </div>
          {this.state.megaMenu ? <MobileMenu /> : null}
        </div>
      </Aux>
    );
  }
}
export default MobileHeader;
