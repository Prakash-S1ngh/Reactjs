// Dataforshop.jsx
import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: "prodname",
    initialState: [], 
    reducers: {
        addInCart: (state, action) => {
            // Add the product to the cart
            state.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            // Remove the product from the cart
            return state.filter(product => product.id !== action.payload.id);
        }
    }
});

export const { addInCart, deleteFromCart } = ProductSlice.actions;

export default ProductSlice; // Exporting the slice itself


