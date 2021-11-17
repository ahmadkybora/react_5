import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import "bootstrap/dist/css/bootstrap.css";
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.css';
// import axios from 'axios';

// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
// const token = localStorage.getItem('token');

// if(token){
//   axios.defaults.headers.common = {'Authorization': `bearer ${token}`};
// }
// const users = axios.get('http://127.0.0.1:8000/api/panel/users')
//   .then(res => {
//     const users = res.data.data;
//     console.log(typeof(users));
//   });


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
