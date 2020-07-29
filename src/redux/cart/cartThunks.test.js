import { fetchCartProducts } from './cartThunks';
import { getProducts } from '~/services/firebase/firestoreHandler';
import { setProductsData } from '~/redux/products';

jest.mock('~/services/firebase/firestoreHandler');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('cart thunks', () => {
  describe('fetchCartProducts thunk', () => {
    test('should fetch products in cart and set data', async () => {
      const state = {
        cart: {
          items: { product1: 10 },
        },
      };
      const dispatch = jest.fn();
      const getState = jest.fn(() => state);
      getProducts.mockReturnValueOnce(
        new Promise((resolve) => resolve([{ id: 'product1' }]))
      );

      await fetchCartProducts()(dispatch, getState);

      expect(getProducts).toHaveBeenCalledWith(['product1']);
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining(
          setProductsData({ products: [{ id: 'product1' }] })
        )
      );
    });

    test('should not fetch products if no items are in cart', async () => {
      const state = {
        cart: { items: {} },
      };
      const dispatch = jest.fn();
      const getState = jest.fn(() => state);

      await fetchCartProducts()(dispatch, getState);

      expect(getProducts).not.toHaveBeenCalled();
    });
  });
});
