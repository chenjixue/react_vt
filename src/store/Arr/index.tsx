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
            console.log("incremented")
            return [...state, { id: 3, text: 'Build something fun!', completed: false, color: 'blue' }]
        },
        decremented: state => {
            return [...state.slice(0, state.length - 1)]
        }
    }
})
export const { reducer, actions } = arrSlice
