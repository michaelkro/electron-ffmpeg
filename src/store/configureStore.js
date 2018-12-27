import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import fileSelectPageReducer from '../pages/FileSelectPage/FileSelectPageReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      fileSelectPage: fileSelectPageReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
