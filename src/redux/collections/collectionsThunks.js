import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from 'sentry-expo';
import {
  getCollection,
  getCollectionProducts,
} from '~/services/firebase/firestoreHandler';
import { setProductsData } from '~/redux/products';

export const fetchCollection = createAsyncThunk(
  'collections/fetchCollection',
  async (payload, { dispatch }) => {
    const { collectionId } = payload;

    try {
      const [collection, productPage] = await Promise.all([
        getCollection(collectionId),
        getCollectionProducts(collectionId),
      ]);

      dispatch(setProductsData({ products: productPage.products }));

      return { collection, products: productPage.products };
    } catch (err) {
      Sentry.captureException(err);
      throw err;
    }
  }
);

export const fetchCollectionPage = createAsyncThunk(
  'collections/fetchCollectionPage',
  async (payload, { dispatch, getState }) => {
    const { collectionId } = payload;
    const { collections } = getState();

    const collectionProducts = collections.entities[collectionId].products;
    const lastProductId = collectionProducts[collectionProducts.length - 1];

    try {
      const { products, isLastPage } = await getCollectionProducts(
        collectionId,
        lastProductId
      );

      dispatch(setProductsData({ products }));

      return { collectionId, products, isLastPage };
    } catch (err) {
      Sentry.captureException(err);
      throw err;
    }
  }
);
