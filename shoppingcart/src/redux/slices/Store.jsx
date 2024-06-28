// Store.jsx
import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './Dataforshop'; // Importing named export

export const store = configureStore({
    reducer: {
        prodname: ProductSlice.reducer // Accessing the reducer property from ProductSlice
    }
});