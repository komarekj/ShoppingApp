import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import LoadingStatus from '~/constants/LoadingStatus';
import { fetchProduct } from './productsThunks';

const initialState = {
  entities: {},
  status: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      const { products } = action.payload;
      state.entities = { ...state.entities, ..._.keyBy(products, 'id') };
    },
  },
  extraReducers: {
    // fetchProduct
    [fetchProduct.pending]: (state, action) => {
      const { productId } = action.meta.arg;
      state.status[productId] = LoadingStatus.LOADING;
    },
    [fetchProduct.rejected]: (state, action) => {
      const { productId } = action.meta.arg;
      state.status[productId] = LoadingStatus.ERROR;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      const { product } = action.payload;
      state.status[product.id] = LoadingStatus.FINISHED;
      state.entities[product.id] = product;
    },
  },
});

export const { setProductsData } = productsSlice.actions;

export default productsSlice.reducer;
