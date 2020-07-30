import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {position} from './App.jsx';
import Demo from './Demo';
import Cards from './cards';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Cards name='harsh' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
