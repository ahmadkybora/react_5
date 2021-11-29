import React, { Component } from 'react'
import SideBar from '../sidebar';
import Footer from '../footer';
import Header from './layouts/header';
import Users from './users/users';
import EditUser from './users/editUsers';
import products from './products/index';
import { ProtectedRouteAdmin } from '../../middlewares/isAdmin';
import categories from './categories';
import Paint from './paint/index';
import Dashboard from './dashboard/index';

class Panel extends Component {
    state = {};

    render () {
        return (
          <React.Fragment>
            <Header />
            <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-xl-2 col-lg-2">
                    <SideBar />
                </div>
                <div className="col-xl-10 col-lg-10">
                    <ProtectedRouteAdmin path="/panel/dashboard" component={Dashboard} />
                    <ProtectedRouteAdmin path="/panel/users" component={Users} />
                    <ProtectedRouteAdmin path="/panel/users/edit/:id" component={EditUser} />
                    <ProtectedRouteAdmin path="/panel/products" component={products} />
                    <ProtectedRouteAdmin path="/panel/categories" component={categories} />
                    <ProtectedRouteAdmin path="/panel/paint" component={Paint} />
                </div>
                <div className="col-xl-12 col-lg-12">
                    {/* <Footer /> */}
                </div>
              </div>
            </div>
          </React.Fragment>
        )
    }
}

export default Panel;