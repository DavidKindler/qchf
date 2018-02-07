import * as actionTypes from './actionTypes';

export const screenResize = window => {
  return {
    type: actionTypes.SCREEN_RESIZE,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  };
};

export const setBreakpoints = breakpoints => {
  return {
    type: actionTypes.SET_BREAKPOINTS,
    desktop: breakpoints.desktop,
    tablet: breakpoints.tablet
  };
};
