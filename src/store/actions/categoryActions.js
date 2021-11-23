import http from "../../services/httpService"
import * as actions from "./type"

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