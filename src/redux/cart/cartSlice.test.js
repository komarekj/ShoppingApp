import LoadingStatus from '~/constants/LoadingStatus';
import cartReducer, { addToCart, removeFromCart, clearCart } from './cartSlice';
import { fetchCartProducts } from './cartThunks';

describe('cart reducer', () => {
  describe('addToCart action', () => {
    test('should add new product to cart', () => {
      const state = { items: {} };
      const action = addToCart({ productId: 'testId', qty: 10 });
      const results = cartReducer(state, action);
      expect(results.items.testId).toBe(10);
    });

    test('should increase product cart qty', () => {
      const state = { items: { testId: 2 } };
      const action = addToCart({ productId: 'testId', qty: 3 });
      const results = cartReducer(state, action);
      expect(results.items.testId).toBe(5);
    });
  });

  describe('removeFromCart action', () => {
    test('should remove product from cart', () => {
      const state = { items: { testId: 2, testId2: 5 } };
      const action = removeFromCart({ productId: 'testId' });
      const results = cartReducer(state, action);
      expect(results.items).toEqual({ testId2: 5 });
    });
  });

  describe('clearCart action', () => {
    test('should remove product from cart', () => {
      const state = { items: { testId: 2, testId2: 5 } };
      const action = clearCart();
      const results = cartReducer(state, action);
      expect(results.items).toEqual({});
    });
  });

  describe('fetchCartProducts thunk', () => {
    test('should set loading status on pending', () => {
      const state = { status: null };
      const results = cartReducer(state, fetchCartProducts.pending());
      expect(results.status).toBe(LoadingStatus.LOADING);
    });

    test('should set error status on rejected', () => {
      const state = { status: null };
      const results = cartReducer(state, fetchCartProducts.rejected());
      expect(results.status).toBe(LoadingStatus.ERROR);
    });

    test('should set finished status on fulfilled', () => {
      const state = { status: null };
      const results = cartReducer(state, fetchCartProducts.fulfilled());
      expect(results.status).toBe(LoadingStatus.FINISHED);
    });
  });
});
