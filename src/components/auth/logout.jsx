import React, { useState, useEffect } from 'react';
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

const Logout = (props) => {
    useEffect(() => {
        props.onLogout();
    });

    return <div></div>
}
 
export default connect(mapStateToProps, { onLogout })(Logout);