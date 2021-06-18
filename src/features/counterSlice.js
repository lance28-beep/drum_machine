import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  label: 'Sound',
}

export const buttonSlice = createSlice({
  name: 'label',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeLabel: (state, action) => {
      state.label = action.payload
    },
  },
})

export const { changeLabel } = buttonSlice.actions
export const selectLabel = (state) => state.label.label

export default buttonSlice.reducer
