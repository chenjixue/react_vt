const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

import { createSlice, configureStore } from '@reduxjs/toolkit'
const arrSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log("incremented")
            //   state.value += 1
            return [...state, { id: 3, text: 'Build something fun!', completed: false, color: 'blue' }]

        },
        decremented: state => {
            return [...state.slice(0, state.length - 1)]
        }
    }
})
export const { incremented, decremented } = arrSlice.actions
export default arrSlice
