import http from "../../services/httpService"
import * as actions from "./type"

export const getProducts = (page) => {
    return async dispatch => {
        await http.get(`/panel/products?page=${page}`)
        .then(res => {
            dispatch({
                type: actions.GET_PRODUCTS,
                payload: res.data.data
            })
        })
        .catch(err => Error(err))
    }
}
