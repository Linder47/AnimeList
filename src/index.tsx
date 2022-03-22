import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './pages/Main/Main';

ReactDOM.render(
  <Provider store={store}>
    {/* <Main/> */}
    <App />

  </Provider>,
  document.getElementById('root')
);

