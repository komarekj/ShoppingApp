import { fetchNewOrder } from './checkoutThunks';
import { createNewOrder } from '~/services/firebase/firestoreHandler';
import { clearCart } from '~/redux/cart';
import { firebaseApp } from '~/services/firebase';

jest.mock('~/services/firebase/firestoreHandler');

describe('checkout thunks', () => {
  describe('fetchNewOrder thunk', () => {
    test('should fetch new order and clear cart', async () => {
      const formData = { name: 'testName' };
      const state = {
        cart: {
          items: { product1: 10 },
        },
        products: {
          entities: {
            product1: { id: 'product1', price: 2 },
          },
        },
      };
      const dispatch = jest.fn();
      const getState = jest.fn(() => state);
      firebaseApp.auth.mockReturnValueOnce({
        currentUser: { uid: 'testUser' },
      });

      await fetchNewOrder({ formData })(dispatch, getState);

      expect(createNewOrder).toHaveBeenCalledWith({
        name: 'testName',
        items: [
          {
            qty: 10,
            product: { id: 'product1', price: 2 },
          },
        ],
        status: 'Processing',
        created: expect.anything(),
        total: '20',
        userId: 'testUser',
      });

      expect(dispatch).toHaveBeenCalledWith(clearCart());
    });
  });
});
