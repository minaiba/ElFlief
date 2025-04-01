// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   favorites: [],  // Массив избранных товаров
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addToFavorites: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.favorites.find(favorite => favorite.id === item.id);
//       if (!existingItem) {
//         state.favorites.push(item);  // Добавляем товар в избранное
//       }
//     },
//     removeFromFavorites: (state, action) => {
//       const id = action.payload;
//       state.favorites = state.favorites.filter(favorite => favorite.id !== id);  // Удаляем товар из избранного
//     },
//   },
// });

// export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
// export default favoritesSlice.reducer;
