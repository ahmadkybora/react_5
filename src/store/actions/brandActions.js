import http from "../../services/httpService"
import * as actions from "./type"

export const getBrands = (page = 1) => {
    return async dispatch => {
        await http.get(`/panel/brands?page=${page}`)
            .then(res => {
                dispatch({
                    type: actions.GET_BRANDS,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err))
    }
}

export const createBrands = (payload) => {
    return {
        type: actions.CREATE_BRANDS,
        payload
    };
}

export const storeBrands = (payload) => {
    return async dispatch => {
        await http.post(`/panel/brands}`, payload)
            .then(res => {
                dispatch({
                    type: actions.STORE_BRANDS,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err))
    }
}

export const editBrands = (payload) => {
    return {
      type: actions.EDIT_BRNADS,
      payload
    };
};

export const updateBrands = (payload) => {
    return async dispatch => {
        await http.patch(`/panel/brands`, payload)
            .then(res => {
                dispatch({
                    type: actions.UPDATE_BRNADS,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err))
    }
};
