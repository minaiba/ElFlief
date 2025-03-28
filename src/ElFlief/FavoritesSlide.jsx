import { createSlice } from '@reduxjs/toolkit';


const Favorite = createSlice({
    name: 'idols',
    initialState: {
        cartItem: [],
    },
    reducers: {
        addCart: (state, action) => {
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItem[itemIndex].quantity += action.payload.quantity;
            } else {
                state.cartItem.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItem = [];
        },
    },
});
export const { addCart, removeFromCart, clearCart } = Favorite.actions;
export default Favorite.reducer;