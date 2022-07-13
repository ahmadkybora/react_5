import http from './httpService';
import { Success, Error } from '../utils/exceptionHandler';

export const getAllProducts = async (page = 1) => {
    return await http.get(`panel/products?page=${page}`)
        .then(res => res.data.data)
        .catch(err => Error(err));
}

export const getFindProductById = () => {}

export const userEdit = () => {}

export const ProductUpdate = async product => {
    return await http.patch(`panel/products/${product.id}`, product)
        .then(res => Success(res))
        .catch(err => Error(err));
}

export const deleteProduct = async product => {
    return await http.delete(`panel/products/${product.id}`)
        .then(res => Success(res))
        .catch(err => Error(err));
}