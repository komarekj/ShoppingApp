import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from 'sentry-expo';
import { getProduct } from '~/services/firebase/firestoreHandler';

// eslint-disable-next-line import/prefer-default-export
export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (payload) => {
    const { productId } = payload;

    try {
      const product = await getProduct(productId);
      return { product };
    } catch (err) {
      Sentry.captureException(err);
      throw err;
    }
  }
);
