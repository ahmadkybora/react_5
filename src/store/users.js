import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'users',
  initialState: {
    value: 0,
  },
  reducers: {
    user: (state, action) => {
    },
    users: (state, action) => {
    },
  },
  actions: {}, 
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = users.actions

export default users.reducer