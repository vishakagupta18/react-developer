import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [ ],
    // quantity: 1,
    // totalPrice: 0,
    // tempCart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocartList : (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if(existingItem)
            existingItem.quantity += 1;
        else
            state.cart.push({...action.payload, quantity: 1});
        // console.log('state.cart', state.cart);
        // state.tempCart = [...state.cart];
        // state.totalPrice = state.cart.reduce((sum,cart)=>sum + cart.price*cart.quantity, 0);
    },
    incrementCart: (state, action) => {
        const selectedItem = state.cart.find(item => item.id === action.payload.id);
        if(selectedItem) {
            selectedItem.quantity += 1 ;//.push(newItem + 1);
        }
        // state.tempCart = [...state.cart]
        // state.totalPrice = state.cart.reduce((sum,cart)=>sum + cart.price*selectedItem.quantity, 0);
    },
    decrementCart: (state, action) => {
        const removedItem = state.cart.find(item => item.id === action.payload.id);
        if(removedItem) {
            removedItem.quantity -= 1 ;
        }
        if(removedItem.quantity < 1)
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        // state.tempCart = [...state.cart]
        // state.totalPrice = state.cart.reduce((sum,cart)=>sum + cart.price*removedItem.quantity, 0);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTocartList, incrementCart, decrementCart, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;