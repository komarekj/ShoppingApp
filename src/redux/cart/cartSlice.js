import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import LoadingStatus from '~/constants/LoadingStatus';
import { fetchCartProducts } from './cartThunks';

const initialState = {
  items: {},
  status: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, qty } = action.payload;
      const existingCount = state.items[productId] || 0;
      const newQty = qty || 1;
      state.items[productId] = existingCount + newQty;
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.items = _.omit(state.items, [productId]);
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
  extraReducers: {
    // fetchCartProducts
    [fetchCartProducts.pending]: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    [fetchCartProducts.rejected]: (state) => {
      state.status = LoadingStatus.ERROR;
    },
    [fetchCartProducts.fulfilled]: (state) => {
      state.status = LoadingStatus.FINISHED;
    },
  },
});

const persistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  whitelist: ['items'],
};

export const cartPersistedReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
