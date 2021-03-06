//React
import React from 'react';
import ReactDom from 'react-dom';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

//Async
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

//Reducers
import reducers from './reducers';

//Components
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
