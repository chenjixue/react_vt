import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterSlice from "./reducer"
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store