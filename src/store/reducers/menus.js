import * as actionTypes from '../actions/actionTypes';
// import allLabels from '../../labels.json';

const MENUS = {
  language: 'en',
  megamanu: {
    en: {
      link1: 'http://www.nxp.com',
      link2: 'https://www.qualcomm.com'
    }
  }
};

const menuReducer = (state = MENUS, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    default:
      return { ...state };
  }
};

export default menuReducer;
