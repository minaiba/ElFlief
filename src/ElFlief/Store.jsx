import { configureStore } from "@reduxjs/toolkit";
import Cart from './CartSlice'

const MyStore = configureStore ({
    reducer: {
    Cosmo: Cart
    }
})

export default MyStore
