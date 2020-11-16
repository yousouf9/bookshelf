import React from  'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware}  from  'redux'
import promiseMiddleware  from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Routes from './routes';
import Reducer from './Reducers';


const createStoreMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)
ReactDom.render(
  <Provider store={createStoreMiddleware(Reducer)}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
