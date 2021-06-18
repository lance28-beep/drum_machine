import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: null,
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleButton: (state, action) => {
      state.toggle = action.payload
    },
  },
})

export const { toggleButton } = toggleSlice.actions
export const selecttoggleButton = (state) => state.toggle.toggle

export default toggleSlice.reducer
