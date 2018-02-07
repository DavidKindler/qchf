import * as actionTypes from './actionTypes';
import axios from 'axios';
let ROOT_URL =
  'http://localhost:5000/proxy?url=http://az84ap89.am.freescale.net:8206/search_api/meta-data/getAsset/allResults/';

export const fetchMegaMenu = () => {
  return {
    megamanu: {
      link1: 'http://www.nxp.com',
      link2: 'https://www.qualcomm.com'
    }
  };
};

// export const updateParams = params => {
//   return {
//     type: actionTypes.UPDATE_PARAMS,
//     payload: params
//   };
// };
// export const loadingResults = loading => {
//   return {
//     type: actionTypes.LOADING_RESULTS,
//     payload: loading
//   };
// };
// export const receiveResults = data => {
//   return {
//     type: actionTypes.RECEIVE_RESULTS,
//     payload: data
//   };
// };
// export const receiveError = error => {
//   return {
//     type: actionTypes.RECEIVE_ERROR,
//     payload: error
//   };
// };

// export const fetchResults = keyword => {
//   let url;
//   if (keyword) url = ROOT_URL + '{keyword=' + keyword + '&collection=partners}';
//   else
//     // url = url+"{collection=partners&query=typeHirarchy.Development%20Tool%20Providers}"
//     url = ROOT_URL + '{collection=partners}';
//   return function(dispatch) {
//     dispatch(loadingResults(true));
//     return axios({
//       url: url,
//       timeout: 20000
//     })
//       .then(function(response) {
//         dispatch(receiveResults(response.data));
//         dispatch(loadingResults(false));
//       })
//       .catch(function(response) {
//         dispatch(receiveError(response.data));
//         dispatch(loadingResults(false));
//       });
//   };
// };
