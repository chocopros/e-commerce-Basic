import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
	name: 'products',
    initialState: null,
    reducers: {

        setProducts: (state, action) => action.payload
        
    }
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    return axios.get(URL)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))
};
