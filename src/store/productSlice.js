import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        isLoading: true,
        singleProduct: {},
        loadSingleProduct: false
    },
    reducers: {
        getAllProductsAction: (state, action) => {
            state.isLoading = false;
            state.allProducts = action.payload;
        },

        getSingleProductAction: (state, action) => {
            // console.log(action.payload);
            state.singleProduct = action.payload;
        }

    }
})

export const { getAllProductsAction, getSingleProductAction } = productSlice.actions;
export default productSlice.reducer;