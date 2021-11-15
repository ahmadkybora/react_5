import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import About from './components/about';
import NavBar from './components/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/panel/users/users';
import EditUser from './components/panel/users/editUsers';

//require('dotenv').config();

class App extends Component {
  render (){
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />

            <Route path="/panel/users" component={Users} />
            <Route path="/panel/users/edit/:id" component={EditUser} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
