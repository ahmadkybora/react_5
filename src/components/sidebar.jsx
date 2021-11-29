import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    state = {};

    render () {
        return (
            <div>
                <div className="container">
                    <ul className="nav nav-tabs flex-column">
                        <li className="nav-item">
                            <NavLink to="/panel/dashboard" className="nav-link" href="#">
                                <i className="fa fa-dashboard">Dashboard</i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/panel/users" className="nav-link" href="#">
                                <i className="fa fa-users">Users</i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/panel/products" className="nav-link" href="#">
                                <i className="fa fa-product-hunt">Products</i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/panel/categories" className="nav-link" href="#">
                                <i className="fa fa-product-hunt">Categories</i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;