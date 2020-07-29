import {
  selectCartCount,
  selectCartProductItems,
  selectCartTotal,
} from './cartSelectors';

describe('cartSelectors', () => {
  const fullCartState = {
    cart: {
      items: { product1: 2, product2: 5 },
    },
    products: {
      entities: {
        product1: { id: 'product1', price: 5 },
        product2: { id: 'product2', price: 3 },
      },
    },
  };

  const emptyCartState = {
    cart: { items: {} },
    products: { entities: {} },
  };

  describe('selectCartCount', () => {
    test('should return count for cart items', () => {
      const count = selectCartCount(fullCartState);
      expect(count).toBe(7);
    });

    test('should return zero for an empty cart', () => {
      const count = selectCartCount(emptyCartState);
      expect(count).toBe(0);
    });
  });

  describe('selectCartProductItems', () => {
    test('should return items with product and qty', () => {
      const items = selectCartProductItems(fullCartState);
      expect(items.length).toBe(2);
      expect(items[0]).toEqual({
        qty: 2,
        product: { id: 'product1', price: 5 },
      });
    });

    test('should return an empty array for empty cart', () => {
      const items = selectCartProductItems(emptyCartState);
      expect(items).toEqual([]);
    });
  });

  describe('selectCartTotal', () => {
    test('should return total count', () => {
      const total = selectCartTotal(fullCartState);
      expect(total).toBe('25');
    });

    test('should return zero for empty cart', () => {
      const total = selectCartTotal(emptyCartState);
      expect(total).toBe('0');
    });
  });
});
