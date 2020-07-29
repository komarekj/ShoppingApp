import { fetchCollection, fetchCollectionPage } from './collectionsThunks';
import {
  getCollection,
  getCollectionProducts,
} from '~/services/firebase/firestoreHandler';
import { setProductsData } from '~/redux/products';

jest.mock('~/services/firebase/firestoreHandler');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('collection thunks', () => {
  describe('fetchCollection thunk', () => {
    test('should fetch collection and products', async () => {
      const collection = { id: 'testCollectionId' };
      const products = [{ id: 'testProductId' }];
      const payload = { collectionId: 'testId' };
      const dispatch = jest.fn();
      const getState = jest.fn(() => ({}));
      getCollection.mockReturnValueOnce(
        new Promise((resolve) => resolve(collection))
      );
      getCollectionProducts.mockReturnValueOnce(
        new Promise((resolve) => resolve({ products }))
      );

      const results = await fetchCollection(payload)(dispatch, getState);

      expect(getCollection).toHaveBeenCalledWith('testId');
      expect(getCollectionProducts).toHaveBeenCalledWith('testId');

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining(setProductsData({ products }))
      );
      expect(results.payload).toEqual({ collection, products });
    });
  });

  describe('fetchCollectionPage thunk', () => {
    test('should fetch collection page products', async () => {
      const state = {
        collections: {
          entities: {
            testCollectionId: {
              products: ['testProduct1', 'testProduct2'],
            },
          },
        },
      };
      const products = [{ id: 'testProductId' }];
      const payload = { collectionId: 'testCollectionId' };
      const dispatch = jest.fn();
      const getState = jest.fn(() => state);

      getCollectionProducts.mockReturnValueOnce({
        products,
        isLastPage: false,
      });

      const results = await fetchCollectionPage(payload)(dispatch, getState);

      expect(getCollectionProducts).toHaveBeenCalledWith(
        'testCollectionId',
        'testProduct2'
      );

      expect(dispatch).toHaveBeenCalledWith(setProductsData({ products }));
      expect(results.payload).toEqual({
        collectionId: 'testCollectionId',
        products,
        isLastPage: false,
      });
    });
  });
});
