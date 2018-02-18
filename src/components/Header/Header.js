import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desktop from './Desktop/DesktopHeader';
import Tablet from './Tablet/TabletHeader';
import Mobile from './Mobile/MobileHeader';
import Aux from '../../utilities/ReactAux';

export class Header extends Component {
  render() {
    const { isMobile, isTablet } = this.props.screen;
    let megaMenu = (isMobile && <Mobile />) || (isTablet && <Tablet />) || <Desktop />;

    return (
      <Aux>
        <div className="navigationContainer">{megaMenu}</div>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.screen,
  sidenav: state.sidenav
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
