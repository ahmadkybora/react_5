import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Search from '../utils/components/search';
import { button, input } from '../utils/tools';

class Header extends Component {
    render() { 
        return (
            <div classname="container mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <NavLink to="/">
                            <p className="text-center pug">Categories</p>
                        </NavLink>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <NavLink to="/">
                            <p className="text-center pug">Products</p>
                        </NavLink>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <NavLink to="/">
                            <p className="text-center pug">Services</p>
                        </NavLink>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <NavLink to="/">
                            <p className="text-center pug">Froum</p>
                        </NavLink>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <NavLink to="/">
                            <p className="text-center pug">Froum</p>
                        </NavLink>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <NavLink to="/">
                            <p className="text-center pug">Froum</p>
                        </NavLink>
                    </div>
                </div>
                {/* <div className="container">
                    <Search />
                </div> */}
            </div>
        );
    }
}
 
export default Header;