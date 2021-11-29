import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    state = {};

    render () {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="row">
                                <form>
                                    <div className="input-group">
                                        <div className="form-outline w-75">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control"
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <button 
                                            className="btn btn-success">
                                            <i className="fa fa-send" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="row">
                                <h3>About Us</h3>
                                <NavLink to="#">1</NavLink>
                                <NavLink to="#">2</NavLink>
                                <NavLink to="#">3</NavLink>
                                <NavLink to="#">4</NavLink>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="row">
                                <h3>Service</h3>
                                <NavLink to="#">1</NavLink>
                                <NavLink to="#">2</NavLink>
                                <NavLink to="#">3</NavLink>
                                <NavLink to="#">4</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;