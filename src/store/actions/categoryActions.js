import http from "../../services/httpService"
import * as actions from "./type"

export const getCategories = (page = 1) => {
    return async dispatch => {
        await http.get(`/panel/categories?page=${page}`)
            .then(res => {
                dispatch({
                    type: actions.GET_CATEGORIES,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err))
    }
}