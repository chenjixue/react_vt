import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux'
import { reducer as arrSliceReducer } from './Arr'
import { reducer as counterSliceReducer } from './Number'

const rootReducer = combineReducers({
    arrSlice: arrSliceReducer,
    counterSlice: counterSliceReducer
})
const store = configureStore({
    reducer: rootReducer,
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store