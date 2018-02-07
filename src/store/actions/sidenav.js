import * as actionTypes from './actionTypes';

export const closeSidenav = () => {
  return {
    type: actionTypes.CLOSE_SIDENAV
  };
};

export const loadSidenav = () => {
  return {
    type: actionTypes.LOAD_SIDENAV
  };
};

export const sidenavLoaded = () => {
  return {
    type: actionTypes.SIDENAV_LOADED
  };
};

export const openSidenav = () => {
  return {
    type: actionTypes.OPEN_SIDENAV
  };
};
