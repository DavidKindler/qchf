import * as actionTypes from './actionTypes';

export const setLanguage = lang => {
  return {
    type: actionTypes.SET_LANGUAGE,
    language: lang
  };
};
