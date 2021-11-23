import http from "../../services/httpService"
import * as actions from "./type"

export const getProducts = () => {
    return async dispatch => {
        await http.get('/products')
        .then(res => {
            dispatch({
                type: actions.GET_PRODUCTS,
                payload: res.data.data
            })
        })
        .catch(err => Error(err))
    }
}
