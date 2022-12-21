import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
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
      console.log("incremented")
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
      console.log("decremented")
    }
  },
  // 处理异步请求结果的reducer
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const data = action.payload; // data为接口返回的data字段
      state.value++;
      console.log(data, "----data");
    })
  },
})
export const fetchUsers = createAsyncThunk<any, string>('users/fetchUsers', async (a, b) => {
  const response = await Promise.resolve(111)
  return response
})
export const { actions, reducer } = counterSlice
export const asyncAction = { fetchUsers }

// export default counterSlice
