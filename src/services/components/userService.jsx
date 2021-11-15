import http from '../httpService';
import { Success, Error } from '../../utils/exceptionHandler';
import { useState } from 'react';

export const getAllUsers = async (page) => {
    // console.log(page);
    return await http.get(`panel/users?page=${page}`)
        .then(res => res.data.data)
        .catch(err => Error(err));
}

export const getFindUserById = () => {}
export const userEdit = () => {}

export const userUpdate = async user => {
    return await http.patch(`panel/users/${user.id}`, user)
        .then(res => Success(res))
        .catch(err => Error(err));
}

export const deleteUser = async user => {
    return await http.delete(`panel/users/${user.id}`)
        .then(res => Success(res))
        .catch(err => Error(err));
}