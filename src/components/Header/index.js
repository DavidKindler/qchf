import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';

export class Header extends Component {
  render() {
    const { isMobile, isTablet } = this.props.screen;
    let megaMenu = (isMobile && <Mobile />) || (isTablet && <Tablet />) || <Desktop />;

    return <div>{megaMenu}</div>;
  }
}

const mapStateToProps = state => ({
  screen: state.screen,
  sidenav: state.sidenav
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
