import { createSlice } from '@/reduxjs/toolkit';
import { slice } from 'lodash';

const slice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        getProductAll: (products, action) => {
            products.push({
                id: 1,
                description: action.payload.description
            })
        },
        productAdded: (state, action) => {}
    }
})

export const { getProductAll } = slice.actions;
export default slice.reducer;