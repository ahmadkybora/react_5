import {REMOVE, UPDATE_FAILURE, UPDATE_STARTED, UPDATE_SUCCESS} from './user.types';


    const INITIAL_STATE = {
        user: null,
        loading: true,
        error: null
    };

    const reducer = (state = INITIAL_STATE, action) => {
    
        switch (action.type) {

            case REMOVE:

                return {
                    ...state,
                    loading:false,
                    error: null,
                    user: null
                };
            case UPDATE_STARTED:
                return {
                    ...state,
                    loading:true,
                    error: null
                };
            case UPDATE_SUCCESS:

                return {
                    ...state,
                    loading: false,
                    error: null,
                    user: action.payload
                };
            case UPDATE_FAILURE:

                return {
                    ...state,
                    loading: false,
                    error: action.payload.error
                };

             default: return state;

        }

    };

    export default reducer;