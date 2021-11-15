import http from './httpService';
import React from 'react';
import { toast } from 'react-toastify';
import { Success, Error } from '../utils/exceptionHandler';
import { Router, Redirect, browserHistory, useHistory } from 'react-router-dom';

export const doLogin = async payload => {
    try {
        await http.post('login', payload)
            .then(async res => {
                await Success(res);
                const token = res.data.data.token;
                const username = res.data.data.username;
                const fullName = res.data.data.first_name + ' ' + res.data.data.last_name;
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('fullName', fullName);
                const history = useHistory();
                return history.push("/");
                //console.log(props.history.location('/'));
                //<Router.browserHistory.push('/') />;
                //return browserHistory.push('/');
                //<Redirect push to="/" />;
            })
            .catch(async err => {
                await Error(err); 
            });
    } catch (err){
        console.log(err);
    }
}

export const doRegister = async (payload) => {
    try {
        await http.post('register', payload)
            .then(async res => {
                await Success(res);
            })
            .catch(async err => {
                await Error(err); 
            });
    } catch (err){
        console.log(err);
    }
}

export const doLogout = () => {}