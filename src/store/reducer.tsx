import { createSlice, configureStore } from '@reduxjs/toolkit'
// const defaultState = {
//     name: "chenjixue"
// }
// const reducers = (state = defaultState, action) => {
//     let newState = JSON.parse(JSON.stringify(defaultState))
//     return newState
// }
// export default reducers
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 1
    },
    reducers: {
      incremented: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })
  export default counterSlice
  