import { createSlice } from '@reduxjs/toolkit';
import LoadingStatus from '~/constants/LoadingStatus';
import { fetchCollection, fetchCollectionPage } from './collectionsThunks';

const initialState = {
  status: {},
  loadMoreStatus: {},
  entities: {},
};

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: {
    // fetchCollection
    [fetchCollection.pending]: (state, action) => {
      const { collectionId } = action.meta.arg;
      state.status[collectionId] = LoadingStatus.LOADING;
    },
    [fetchCollection.rejected]: (state, action) => {
      const { collectionId } = action.meta.arg;
      state.status[collectionId] = LoadingStatus.ERROR;
    },
    [fetchCollection.fulfilled]: (state, action) => {
      const { collection, products } = action.payload;
      const productIds = products.map((item) => item.id);
      state.status[collection.id] = LoadingStatus.FINISHED;
      state.entities[collection.id] = { ...collection, productIds };
    },

    // fetchCollectionPage
    [fetchCollectionPage.pending]: (state, action) => {
      const { collectionId } = action.meta.arg;
      state.loadMoreStatus[collectionId] = LoadingStatus.LOADING;
    },
    [fetchCollectionPage.rejected]: (state, action) => {
      const { collectionId } = action.meta.arg;
      state.loadMoreStatus[collectionId] = LoadingStatus.ERROR;
    },
    [fetchCollectionPage.fulfilled]: (state, action) => {
      const { collectionId, products, isLastPage } = action.payload;
      const collection = state.entities[collectionId];
      const productIds = products.map((item) => item.id);
      state.entities[collectionId] = {
        ...collection,
        productIds: [...collection.productIds, ...productIds],
      };
      state.loadMoreStatus[collectionId] = isLastPage
        ? LoadingStatus.FINISHED
        : null;
    },
  },
});

export default collectionsSlice.reducer;
