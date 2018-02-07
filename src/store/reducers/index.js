import { combineReducers } from 'redux';
// import labelsReducer from './labels';
import sidenavReducer from './sidenav';
import screenReducer from './screen';
import menuReducer from './menus';

const rootReducer = combineReducers({
  // labels: labelsReducer,
  sidenav: sidenavReducer,
  screen: screenReducer,
  menus: menuReducer
});

export default rootReducer;
