import http from "../../services/httpService"
import * as actions from "./type";
import { Success, Error } from '../../utils/exceptionHandler';

export const getPanel = (payload) => {
    return async dispatch => {
        await http.get('/panel/dashboard')
        .then(res => {
            // Success(res);
            dispatch({
                type: actions.GET_PANEL,
                payload: res.data.data
            });
        })
        .catch(err => Error(err))
    }
}
