import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPanel } from '../../../store/actions/dashboardActions';

const mapStateToProps = state => {
  return {
      panels: state.dashboardReducer.panels
  }
}

const mapDispacthToProps = dispatch => {
  return {
    getPanel: () => dispatch({ type: "GET_PANEL" })      
  }
};

class Dashboard extends Component {
    state = {
      usersCount: '',
      productsCount: '', 
      categoriesCount: '', 
    };

    async componentDidMount() {
      await this.props.getPanel();

      const { users, products, categories } = this.props.panels;

      this.setState({ 
        usersCount: users,
        productsCount: products, 
        categoriesCount: categories,
      });

    }

    render () {
      const style = {"max-width": "15rem"};
      const { usersCount, productsCount, categoriesCount } = this.state;

      return (
        <React.Fragment>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card mx-1 my-1" style={style}>
                <div className="card-header bg-warning text-center">Users</div>
                <div className="card-body">
                  <p className="card-title">you have { usersCount } user</p>
                  <NavLink to="/panel/users">
                    <i className="fa fa-info-circle text-primary"></i>
                  </NavLink>
                </div>
              </div>
              <div className="card mx-1 my-1" style={style}>
                <div className="card-header bg-warning text-center">Categories</div>
                <div className="card-body">
                  <p className="card-title">you have { categoriesCount } category</p>
                  <NavLink to="/panel/categories">
                    <i className="fa fa-info-circle text-primary"></i>
                  </NavLink>
                </div>
              </div>
              <div className="card mx-1 my-1" style={style}>
                <div className="card-header bg-warning text-center">Product</div>
                <div className="card-body">
                  <p className="card-title">you have { productsCount } product</p>
                  <NavLink to="/panel/products">
                    <i className="fa fa-info-circle text-primary"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default connect(mapStateToProps, { getPanel })(Dashboard);