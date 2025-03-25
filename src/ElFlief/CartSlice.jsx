
import { createSlice } from '@reduxjs/toolkit';

const initialState = { activeSlide: 0 };

const CosmoSlice = createSlice({
  name: 'Cosmo',
  initialState,
  reducers: {
      setActiveSlide: (state, action) => {
          state.activeSlide = action.payload;
      },

  },
});

export const { setActiveSlide} = CosmoSlice.actions;

export default CosmoSlice.reducer;