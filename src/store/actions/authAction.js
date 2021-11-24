import http from "../../services/httpService"
import * as actions from "./type";
import { Success, Error } from '../../utils/exceptionHandler';
import { Route, Switch, Redirect } from "react-router-dom";

export const onLogin = (payload) => {
    return async dispatch => {
        await http.post('/login', payload)
        .then(res => {

            localStorage.getItem('fullName');
            localStorage.getItem('username');
            localStorage.getItem('isAdmin');
            localStorage.getItem('token');

            localStorage.setItem('fullName', res.data.data.first_name + ' ' + res.data.data.last_name);
            localStorage.setItem('username', res.data.data.username);
            localStorage.setItem('isAdmin', res.data.data.isAdmin);
            localStorage.setItem('token', res.data.data.token);

            Success(res);
            dispatch({
                type: actions.LOGIN,
                payload: res.data.data
            });
            if(res.data.data.isAdmin) {
                // <Redirect to="/panel/users"/>
                // console.log()
                window.location.replace('http://localhost:3000/panel/users');
            } else {
                window.location.replace("/");
            }
        })
        .catch(err => Error(err))
    }
}

export const onRegister = (payload) => {
    return async dispatch => {
        await http.post('/register', payload)
        .then(res => {
            Success(res);
            dispatch({
                type: actions.REGISTER,
                payload: res.data.data
            })
        })
        .catch(err => Error(err))
    }
}

export const onLogout = () => {
    return async dispatch => {
        console.log(dispatch)
        await http.get('/logout')
        .then(res => {

            localStorage.removeItem('fullName');
            localStorage.removeItem('username');
            localStorage.removeItem('isAdmin');
            localStorage.removeItem('token');

            Success(res);
            dispatch({
                type: actions.LOGOUT,
                payload: res.data.data
            })

            window.location.replace("/");
        })
        .catch(err => Error(err))
    }
}