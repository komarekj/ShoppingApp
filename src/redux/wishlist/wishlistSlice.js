import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import LoadingStatus from '~/constants/LoadingStatus';
import { fetchWishlistProducts } from './wishlistThunks';

const initialState = {
  items: [],
  status: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { productId } = action.payload;
      if (!state.items.includes(productId)) {
        state.items = [productId, ...state.items];
      }
    },
    removeFromWishlist: (state, action) => {
      const { productId } = action.payload;
      state.items = state.items.filter((itemId) => productId !== itemId);
    },
    toggleWishlist: (state, action) => {
      const { productId } = action.payload;
      if (state.items.includes(productId)) {
        state.items = state.items.filter((itemId) => productId !== itemId);
      } else {
        state.items = [productId, ...state.items];
      }
    },
  },
  extraReducers: {
    // fetchWishlistProducts
    [fetchWishlistProducts.pending]: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    [fetchWishlistProducts.rejected]: (state) => {
      state.status = LoadingStatus.ERROR;
    },
    [fetchWishlistProducts.fulfilled]: (state) => {
      state.status = LoadingStatus.FINISHED;
    },
  },
});

const persistConfig = {
  key: 'wishlist',
  storage: AsyncStorage,
  whitelist: ['items'],
};

export const wishlistPersistedReducer = persistReducer(
  persistConfig,
  wishlistSlice.reducer
);

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
