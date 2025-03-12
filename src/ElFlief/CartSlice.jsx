
import { createSlice } from '@reduxjs/toolkit';

const CosmoSlice = createSlice({
  name: "Cosmo",
  initialState: {
    isOpen: false,
    categories: [
      {
        name: "волосы",
        subcategories: [
          "уход для волос",
          "профессиональный уход",
          "стайлинг",
          "окрашивание",
          "аксессуары",
          "техника для укладки",
          "наборы",
        ],
      },
      { name: "уход", subcategories: ["бальзамы и кондиционеры"] },
      { name: "парфюмерия", subcategories: ["сухие шампуни"] },
      { name: "макияж", subcategories: ["шампуни"] },
      { name: "новые бренды", subcategories: ["новинки"] },
    ],
  },
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = CosmoSlice.actions;
export default CosmoSlice.reducer;