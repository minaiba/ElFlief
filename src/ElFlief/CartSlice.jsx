
import { createSlice } from '@reduxjs/toolkit';

const CosmoSlice = createSlice({
  name: 'Cosmo',
  initialState: {
    cartItem: []
  },
  reducers: {
    addCart: (state, action) => {
      const FindCosmo= state.cartItem.find((el) => el.id === action.payload.id);
      if (!FindCosmo) {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      } 
    },
    
  }
});

export const { addCart } = CosmoSlice.actions;
export default CosmoSlice.reducer;