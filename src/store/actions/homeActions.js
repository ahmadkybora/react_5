import http from "../../services/httpService"
import * as actions from "./type"

export const getProducts = (page = 1) => {
    return async dispatch => {
        await http.get(`/products?page=${page}`)
        .then(res => {
            dispatch({
                type: actions.GET_PRODUCTS,
                payload: res.data.data
            })
        })
        .catch(err => Error(err))
    }
}

export const showProduct = (payload) => {
    return {
        type: actions.SHOW_PRODUCT,
        payload
    };
}

export const getCategories = () => {
    return async dispatch => {
        await http.get('/categories')
        .then(res => {
            dispatch({
                type: actions.GET_CATEGORIES,
                payload: res.data.data
            })
        })
        .catch(err => Error(err))
    }
}