import LoadingStatus from '~/constants/LoadingStatus';
import collectionsReducer from './collectionsSlice';
import { fetchCollection, fetchCollectionPage } from './collectionsThunks';

describe('collection reducer', () => {
  describe('fetchCollection thunk', () => {
    test('should set collection loading status on pending', () => {
      const state = { status: {} };
      const action = fetchCollection.pending(null, {
        collectionId: 'testCollection',
      });
      const results = collectionsReducer(state, action);
      expect(results.status.testCollection).toEqual(LoadingStatus.LOADING);
    });

    test('should set collection error status on rejected', () => {
      const state = { status: {} };
      const action = fetchCollection.rejected(null, null, {
        collectionId: 'testCollection',
      });
      const results = collectionsReducer(state, action);
      expect(results.status.testCollection).toEqual(LoadingStatus.ERROR);
    });

    test('should set collection status and data on fulfilled', () => {
      const state = { status: {}, entities: {} };
      const collection = { id: 'testCollection' };
      const products = [{ id: 'testProduct' }];
      const action = fetchCollection.fulfilled({ collection, products });

      const results = collectionsReducer(state, action);

      expect(results.status.testCollection).toEqual(LoadingStatus.FINISHED);
      expect(results.entities.testCollection).toEqual({
        ...collection,
        productIds: ['testProduct'],
      });
    });
  });

  describe('fetchCollectionPage thunk', () => {
    test('should set collection page loading status on pending', () => {
      const state = { loadMoreStatus: {} };
      const action = fetchCollectionPage.pending(null, {
        collectionId: 'testCollection',
      });
      const results = collectionsReducer(state, action);
      expect(results.loadMoreStatus.testCollection).toEqual(
        LoadingStatus.LOADING
      );
    });

    test('should set collection page error status on rejected', () => {
      const state = { loadMoreStatus: {}, entities: {} };
      const action = fetchCollectionPage.rejected(null, null, {
        collectionId: 'testCollection',
      });
      const results = collectionsReducer(state, action);
      expect(results.loadMoreStatus.testCollection).toBe(LoadingStatus.ERROR);
    });

    test('should set collection page status on fulfilled', () => {
      const state = {
        loadMoreStatus: {},
        entities: {
          testCollection: { productIds: [] },
        },
      };
      const action = fetchCollectionPage.fulfilled({
        collectionId: 'testCollection',
        isLastPage: false,
        products: [{ id: 'testProduct' }],
      });

      const results = collectionsReducer(state, action);
      expect(results.loadMoreStatus.testCollection).toBe(null);

      expect(results.entities.testCollection.productIds).toEqual([
        'testProduct',
      ]);
    });

    test('should set collection page status on last page fulfilled', () => {
      const state = {
        loadMoreStatus: {},
        entities: {
          testCollection: { productIds: [] },
        },
      };

      const action = fetchCollectionPage.fulfilled({
        collectionId: 'testCollection',
        isLastPage: true,
        products: [],
      });

      const results = collectionsReducer(state, action);
      expect(results.loadMoreStatus.testCollection).toBe(
        LoadingStatus.FINISHED
      );
    });
  });
});
