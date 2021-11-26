import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Search from '../utils/components/search';

class NavBar extends Component {
    state = {
      user: {
        fullName: localStorage.getItem('fullName'),
        isAdmin: localStorage.getItem('isAdmin'),
      }
    };

    render () {
      const { fullName, isAdmin } = this.state.user;
      console.log(fullName);
        const style = {
          backgroundColor: "#e3f2fd"
        }

        return (
            <nav className="navbar navbar-expand-sm navbar-light mb-3" style={style}>
              <Link className="navbar-brand" to="/">Home</Link>
              { ( isAdmin === "true" ) && (
                  <NavLink className="nav-item nav-link text-success" to="/panel/users">
                    Panel
                  </NavLink>
              )}
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

              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                  <div className="">
                      <Search />
                  </div>
                  <div className="w-50"></div>
                  {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <i class="fa fa-search text-success" type="submit"></i>
                  </form> */}

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