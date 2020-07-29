import {
  selectWishlistCount,
  selectWishlistProducts,
} from './wishlistSelectors';

describe('wishlistSelectors', () => {
  const fullWishlistState = {
    wishlist: {
      items: ['product1', 'product2'],
    },
    products: {
      entities: {
        product1: { id: 'product1', price: 5 },
        product2: { id: 'product2', price: 3 },
      },
    },
  };

  const emptyWishlistState = {
    wishlist: { items: [] },
    products: { entities: {} },
  };

  describe('selectWishlistCount', () => {
    test('should return count for wishlist items', () => {
      const count = selectWishlistCount(fullWishlistState);
      expect(count).toBe(2);
    });

    test('should return zero for an empty wishlist', () => {
      const count = selectWishlistCount(emptyWishlistState);
      expect(count).toBe(0);
    });
  });

  describe('selectCartProductItems', () => {
    test('should return items with product and qty', () => {
      const items = selectWishlistProducts(fullWishlistState);
      expect(items.length).toBe(2);
      expect(items[0]).toEqual({ id: 'product1', price: 5 });
    });

    test('should return an empty array for empty cart', () => {
      const items = selectWishlistProducts(emptyWishlistState);
      expect(items).toEqual([]);
    });
  });
});
