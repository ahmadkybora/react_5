import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const initialState = {};
export default configureStore({
  reducer,
  initialState
})