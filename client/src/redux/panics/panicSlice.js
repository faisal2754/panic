import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import panicService from './panicService'

const initialState = {
  panics: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Create new panic
export const createPanic = createAsyncThunk(
  'panics/create',
  async (panicData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await panicService.createPanic(panicData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get all panics
export const getPanics = createAsyncThunk(
  'panics/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await panicService.getPanics(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const panicSlice = createSlice({
  name: 'panic',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPanic.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPanic.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.panics.push(action.payload)
      })
      .addCase(createPanic.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPanics.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPanics.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.panics = action.payload
      })
      .addCase(getPanics.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = panicSlice.actions
export default panicSlice.reducer
