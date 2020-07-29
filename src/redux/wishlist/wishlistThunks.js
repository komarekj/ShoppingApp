import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from 'sentry-expo';
import { getProducts } from '~/services/firebase/firestoreHandler';
import { setProductsData } from '~/redux/products';

// eslint-disable-next-line import/prefer-default-export
export const fetchWishlistProducts = createAsyncThunk(
  'wishlist/fetchWishlistProducts',
  async (payload, { getState, dispatch }) => {
    const { wishlist } = getState();
    const productIds = wishlist.items;

    if (productIds.length) {
      try {
        const products = await getProducts(productIds);
        dispatch(setProductsData({ products }));
      } catch (err) {
        Sentry.captureException(err);
        throw err;
      }
    }
  }
);
