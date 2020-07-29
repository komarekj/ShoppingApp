import LoadingStatus from '~/constants/LoadingStatus';
import wishlistReducer, {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
} from './wishlistSlice';
import { fetchWishlistProducts } from './wishlistThunks';

describe('wishlist reducer', () => {
  describe('addToWishlist action', () => {
    test('should add product to wishlist', () => {
      const state = { items: [] };
      const action = addToWishlist({ productId: 'testId' });
      const results = wishlistReducer(state, action);
      expect(results.items).toEqual(['testId']);
    });

    test('should not add product already in wishlist', () => {
      const state = { items: ['testId'] };
      const action = addToWishlist({ productId: 'testId' });
      const results = wishlistReducer(state, action);
      expect(results.items).toEqual(['testId']);
    });
  });

  describe('removeFromWishlist action', () => {
    test('should remove product from wishlist', () => {
      const state = { items: ['product1', 'product2'] };
      const action = removeFromWishlist({ productId: 'product1' });
      const results = wishlistReducer(state, action);
      expect(results.items).toEqual(['product2']);
    });
  });

  describe('toggleWishlist action', () => {
    test('should toggle product wishlist status', () => {
      const state = { items: ['product1', 'product2'] };
      const action = toggleWishlist({ productId: 'product1' });

      const results = wishlistReducer(state, action);
      expect(results.items).toEqual(['product2']);

      const results2 = wishlistReducer(results, action);
      expect(results2.items).toEqual(['product1', 'product2']);
    });
  });

  describe('fetchWishlistProducts thunk', () => {
    test('should set loading status on pending', () => {
      const state = { status: null };
      const results = wishlistReducer(state, fetchWishlistProducts.pending());
      expect(results.status).toBe(LoadingStatus.LOADING);
    });

    test('should set error status on rejected', () => {
      const state = { status: null };
      const results = wishlistReducer(state, fetchWishlistProducts.rejected());
      expect(results.status).toBe(LoadingStatus.ERROR);
    });

    test('should set finished status on fulfilled', () => {
      const state = { status: null };
      const results = wishlistReducer(state, fetchWishlistProducts.fulfilled());
      expect(results.status).toBe(LoadingStatus.FINISHED);
    });
  });
});
