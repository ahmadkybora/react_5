//REDUX
//------------------------------------------------------

//ACTION
const createPolicyAction = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    }
}

const deletePolicyAction = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name,
        }
    }
}

const createClaimeAction = (name, amount) => {
    return {
        type: 'CREATE_CLAIME',
        payload: {
            name,
            amount
        }
    }
}

//REDUCER

const claimReducer = (oldlist, action) => {
    if(action.type === 'CREATE_CLAIME'){}
}

const accountingReducer = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIME'){
        return bagOfMoney - action.payload.amount;
    } 
    else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
} 

const policiesReducer = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICY'){
        return [...listOfPolicies - action.payload.amount];
    } 
    else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter( name => name !== action.payload.name );
    }
    return listOfPolicies;
} 

const { createStore, combineReducers } = Redux;