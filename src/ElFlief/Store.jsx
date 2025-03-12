import { configureStore } from "@reduxjs/toolkit";
import CosmoReducer from './CartSlice'

const MyStore = configureStore ({
    reducer: {
    Cosmo: CosmoReducer
    }
})

export default MyStore
