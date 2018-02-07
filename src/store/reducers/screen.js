import * as actionTypes from '../actions/actionTypes';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  screenHeight: typeof window === 'object' ? window.innerHeight : null,
  tablet: 668,
  desktop: 1024,
  isMobile: false,
  isTablet: false,
  isDesktop: true
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SCREEN_RESIZE:
      const isMobile = state.screenWidth < state.tablet ? true : false;
      const isTablet = state.screenWidth < state.desktop && state.screenWidth > state.tablet ? true : false;
      const isDesktop = state.screenWidth > state.desktop ? true : false;
      return {
        ...state,
        screenWidth: action.screenWidth,
        screenHeight: action.screenHeight,
        isMobile,
        isTablet,
        isDesktop
      };
    case actionTypes.SET_BREAKPOINTS:
      return {
        ...state,
        tablet: action.tablet,
        desktop: action.desktop
      };
  }
  return state;
};

export default screenReducer;
