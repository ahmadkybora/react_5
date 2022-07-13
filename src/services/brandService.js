import http from './httpService';
import { Success, Error } from '../utils/exceptionHandler';

export const getBrands = async (page = 1) => {
    return await http.get(`panel/brands?page=${page}`)
        .then(res => res.data.data)
        .catch(err => Error(err));
}