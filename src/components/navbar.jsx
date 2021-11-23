import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {
      user: {
        fullName: localStorage.getItem('fullName')
      }
    };

    render () {
      const { fullName } = this.state.user;
      console.log(fullName);
        const style = {
          backgroundColor: "#e3f2fd"
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light mb-3" style={style}>
              <Link className="navbar-brand" to="/">Home</Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex justify-content-end">
                  { !fullName && (
                    <React.Fragment>
                      <NavLink className="nav-item nav-link" to="/login">
                        Login
                      </NavLink>
                      <NavLink className="nav-item nav-link" to="/register">
                        Register
                      </NavLink>
                    </React.Fragment>
                  )}
                  { fullName && (
                    <React.Fragment>
                      {/* <i className="fa fa-shopping-cart text-success"></i> */}
                      <NavLink 
                        className="nav-item nav-link fa fa-shopping-cart text-success" 
                        to="/logout"
                      >
                      </NavLink>

                      <NavLink className="nav-item nav-link" to="/profile">
                          {fullName}
                      </NavLink>

                      <NavLink className="nav-item nav-link text-danger" to="/logout">
                          Logout
                      </NavLink>
                    </React.Fragment>
                  )}

                </div>
              </div>
          </nav>
        )
    }
}

export default NavBar;