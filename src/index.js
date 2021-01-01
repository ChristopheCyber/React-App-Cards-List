/*
// for updating GitHub page: key homepage to place in package.json :
  "homepage": "https://ChristopheCyber.github.io/React-App-Cards-List",
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//REDUX Provider class component giving access to Store & Providers, wrapping all App
import { Provider } from 'react-redux';
//store created from all Reducers combined + Middlewares
import { store } from './redux/store';


ReactDOM.render(
  <Provider store={store}> {/*store dispatched on all App*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
