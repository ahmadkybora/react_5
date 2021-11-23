import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onLogout } from '../../store/actions/authAction'

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

const mapDispacthToProps = dispatch => {
    return {
       onLogout: () => dispatch({ type: "LOGOUT" })      
    }
};

class logout extends Component {
    componentDidMount()
    {
        console.log("ok");
        this.props.onLogout()
        // localStorage.removeItem('token');
        // localStorage.removeItem('fullName');
        // localStorage.removeItem('username');
        // localStorage.removeItem('isAdmin');

        // window.location = '/';
    }

    render() { 
        return <div></div>;
    }
}
 
export default connect(mapStateToProps, { onLogout })(logout);