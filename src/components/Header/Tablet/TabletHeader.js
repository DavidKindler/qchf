import React, { Component } from 'react';
import Login from '../Icons/Login/Login';
import Cart from '../Icons/Cart/Cart';
import Search from '../Icons/Search/Search';
import Logo from '../../Logo/Logo';
import Aux from '../../../utilities/ReactAux';
import TabletMenuIcon from '../Menu/Tablet/TabletMenuIcon';
import TabletMenu from '../Menu/Tablet/TabletMenu';

class TabletHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { megaMenu: false };
  }
  render() {
    const handleTabletMenu = () => {
      this.state = this.setState({
        megaMenu: !this.state.megaMenu
      });
    };

    return (
      <Aux>
        <div className="nav-spacer tablet" />
        <div className="container">
          <div className="tablet">
            <TabletMenuIcon close={this.state.megaMenu} click={handleTabletMenu} />

            {this.state.megaMenu ? <TabletMenu /> : <Logo />}
            <div className="iconContainer">
              <Login />
              <Cart />
              <Search />
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default TabletHeader;
