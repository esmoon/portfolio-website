import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
export const TRACKING_ID = 'UA-225644974-1'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
