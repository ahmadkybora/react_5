import {
    GET_USERS,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
  } from "./usersType";
import http from '../../services/httpService';
import { Success, Error } from '../../utils/exceptionHandler';

// import userService from '../../services/usersService';

export const getAllUsers = async (dispatch) => {
    try {
    const payload =  await http.get(`panel/users`)
        .then(res => res.data.data)
        .catch(err => Error(err));

        dispatch({
            type: GET_USERS,
            payload
          });
    } catch (err) {
        console.log(err);
    }
}

export const CREATE_USER = async (dispatch) => {
    try {
    const payload =  await http.get(`panel/users`)
        .then(res => res.data.data)
        .catch(err => Error(err));

        dispatch({
            type: GET_USERS,
            payload
          });
    } catch (err) {
        console.log(err);
    }
}

export const UPDATE_USER = async (dispatch) => {
    try {
    const payload =  await http.get(`panel/users`)
        .then(res => res.data.data)
        .catch(err => Error(err));

        dispatch({
            type: GET_USERS,
            payload
          });
    } catch (err) {
        console.log(err);
    }
}

export const getAllUsers = async (dispatch) => {
    try {
    const payload =  await http.get(`panel/users`)
        .then(res => res.data.data)
        .catch(err => Error(err));

        dispatch({
            type: GET_USERS,
            payload
          });
    } catch (err) {
        console.log(err);
    }
}