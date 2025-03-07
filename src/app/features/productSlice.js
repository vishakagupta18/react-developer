import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    showProducts : (state, action) => {
        state.product = action.payload;
    }
  },
})

export const { showProducts } = productSlice.actions;
export default productSlice.reducer;