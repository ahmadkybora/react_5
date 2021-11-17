import http from '../../services/httpService';
import { Success, Error } from '../../utils/exceptionHandler';

// export const getAllUsers = async (dispatch) => {
//     return await http.get(`panel/users`)
//             .then(res => res.data.data)
//             .then(payload => dispatch({ type: "GET_USERS", payload}))
//             .catch(err => Error(err));
// }

export const getUsers = () => async dispatch => {
    
    try{
        const res = await http.get(`panel/users`)
        dispatch( {
            type: "GET_USERS",
            payload: res.data.data
        })
    }
    catch(error){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: error,
        // })
    }

}