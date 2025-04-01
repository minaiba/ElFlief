import { configureStore } from "@reduxjs/toolkit";
import CosmoReducer from './CartSlice'
import FavoriteReducer from './FavoritesSlide'


const MyStore = configureStore ({
    reducer: {
        cart: CosmoReducer,
        idols: FavoriteReducer,
        }
})

export default MyStore
