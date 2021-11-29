import './App.css';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import About from './components/about';
import NavBar from './components/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/panel/users/users';
import EditUser from './components/panel/users/editUsers';
import Products from './components/panel/products';
import { LogoutRoute } from './middlewares/isLogout';
import { LoginRoute } from './middlewares/isLogin';
import { ProtectedRouteAdmin } from './middlewares/isAdmin';
import logout from './components/auth/logout';
import SideBar from './components/sidebar';
import Dashboard from './components/panel/dashboard';
import Panel from './components/panel';

class App extends Component {

  // state = {
  //   isAdmin: localStorage.getItem('isAdmin'),
  //   loggedIn: localStorage.getItem('token')
  // }

  render (){
    // const { isAdmin, token, loggedIn } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <LogoutRoute path="/login" component={Login} />
            <LogoutRoute path="/register" component={Register} />
            <LoginRoute path="/logout" component={logout} />
            <Route path="/about" component={About} />
            
            <ProtectedRouteAdmin path="/panel" component={Panel} />

          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
