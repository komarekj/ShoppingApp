import { fetchWishlistProducts } from './wishlistThunks';
import { getProducts } from '~/services/firebase/firestoreHandler';
import { setProductsData } from '~/redux/products';

jest.mock('~/services/firebase/firestoreHandler');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('wishlist thunks', () => {
  describe('fetchWishlistProducts thunk', () => {
    test('should fetch products in wishlist and set data', async () => {
      const state = {
        wishlist: {
          items: ['product1'],
        },
      };
      const dispatch = jest.fn();
      const getState = jest.fn(() => state);
      getProducts.mockReturnValueOnce(
        new Promise((resolve) => resolve([{ id: 'product1' }]))
      );

      await fetchWishlistProducts()(dispatch, getState);

      expect(getProducts).toHaveBeenCalledWith(['product1']);
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining(
          setProductsData({ products: [{ id: 'product1' }] })
        )
      );
    });

    test('should not fetch products if no items are in wishlist', async () => {
      const state = {
        wishlist: { items: [] },
      };
      const dispatch = jest.fn();
      const getState = jest.fn(() => state);

      await fetchWishlistProducts()(dispatch, getState);

      expect(getProducts).not.toHaveBeenCalled();
    });
  });
});
