import './styles.scss';
// import all external dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/index';
import returnLang from './utilities/returnLang';
import Header from './components/Header';
import Footer from './components/Footer';
import { setLanguage, screenResize } from './store/actions/index';

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const langToUse = returnLang();
store.dispatch(setLanguage(langToUse));

if (typeof window === 'object') {
  store.dispatch(screenResize(window));
  window.addEventListener('resize', () => {
    store.dispatch(screenResize(window));
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById('qc-header')
);

ReactDOM.render(
  <Provider store={store}>
    <Footer />
  </Provider>,
  document.getElementById('qc-footer')
);
