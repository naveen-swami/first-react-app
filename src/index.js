import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import Controller from './Controller';
import mains from './style1/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Controller />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
