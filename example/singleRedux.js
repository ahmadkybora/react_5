// example
import { createSlice, createReducer } from '@reduxjs/toolkit';
// ------------------------------------------
// create actions
export const bugAdded = craeteAction("bugAdded");
//create reducer
export default createReducer([], {
    bugAdded: (state, action) =>{
        state.push({
            id: 1,
            description: action.payload.description,
            resolved: false
        })
    }, 
    bugResulved: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    }
})
// -----------------------------------------
let lastId = 0;
const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        // actions => action handler
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },

        bugResulved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            state[index].resolved = true;
        }
    },
});


export const { bugAdded, bugResolved, bugRemove } = slice.actions;
export default slice.reducer;