import * as actionTypes from '../actions/actionTypes';
const initialState = {
  loading: true,
  open: false
};
const sidenavReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLOSE_SIDENAV:
      return {
        ...state,
        open: false
      };
    case actionTypes.OPEN_SIDENAV:
      return {
        ...state,
        open: true
      };
    case actionTypes.LOAD_SIDENAV:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SIDENAV_LOADED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
export default sidenavReducer;
