import { fetchProduct } from './productsThunks';
import { getProduct } from '~/services/firebase/firestoreHandler';

jest.mock('~/services/firebase/firestoreHandler');

describe('product thunks', () => {
  describe('fetchProduct thunk', () => {
    test('should fetch a product', async () => {
      const payload = { productId: 'testId' };
      const dispatch = jest.fn();
      const getState = jest.fn(() => ({}));
      const product = { id: 'testId' };
      getProduct.mockReturnValueOnce(
        new Promise((resolve) => resolve(product))
      );

      const results = await fetchProduct(payload)(dispatch, getState);

      expect(getProduct).toHaveBeenCalledWith('testId');
      expect(results.payload).toEqual({ product });
    });
  });
});
