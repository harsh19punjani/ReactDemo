import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {position} from './App.jsx';
import Demo from './Demo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Demo position='Senior Software developer' />  {/*component name */}
    {/* <App />  */}
  <h1 contentEditable='true'>Name: {App}</h1>
  <h1 contentEditable='true'>Position: {position}</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
