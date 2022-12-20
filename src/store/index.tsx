import { createSlice, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import arrSlice from './Arr'
import counterSlice from './Number'
// import counterSlice from "./reducer"
const rootReducer = combineReducers({
    arrSlice: arrSlice.reducer,
    counterSlice: counterSlice.reducer
})
const store = configureStore({
    reducer: rootReducer
})
export default store