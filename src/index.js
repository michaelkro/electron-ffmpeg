import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-overpass/index.css';

import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

library.add(faTimes);

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
