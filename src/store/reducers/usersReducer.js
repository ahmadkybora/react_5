import { getUsers } from '../actions/users';

const initialState = {
  users:[],
  loading:true
}

export default function (users = initialState, action) {
  switch(action.type) {

    case "GET_USERS":
        return {
            ...users,
            users:action.payload,
            loading:false

        }

    default: return users
  }
};