import React, { Component } from 'react'
import SideBar from './sidebar';
import Footer from './footer';
import Header from './header';
import Products from './front/products';
import Banner from './front/banner';
import Categories from './front/categories';
import Brands from './front/brands';

class Home extends Component {
    state = {};

    render () {
        return (
          <React.Fragment>
            <Header />
            <Banner />
            <Products />
            <Categories />
            <Brands />
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-3">
                  <div className="jumbotron">
                    {/* <SideBar /> */}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="jumbotron">
                    {/* <h1>Content</h1> */}
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </React.Fragment>
        )
    }
}

export default Home;