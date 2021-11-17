// import { connect } from "react-redux";
// import { createStore } from "redux";
// const { createStore } = Redux;
// const store = createStore(reducer);
// const store = store => {
//     return {
//         ctr: state.counter
//       }
// };

// export default connect(store)(Counter);
// export default store;
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
const initialState = {};
export default configureStore({
  reducer,
  initialState
})