import { createSelector } from '@reduxjs/toolkit';
import { Decimal } from 'decimal.js';

const selectCartItems = (state) => state.cart.items;
const selectProducts = (state) => state.products.entities;

export const selectCartCount = createSelector(selectCartItems, (items) =>
  Object.values(items).reduce((count, itemQty) => count + itemQty, 0)
);

export const selectCartProductItems = createSelector(
  selectCartItems,
  selectProducts,
  (items, products) =>
    Object.entries(items).map(([productId, qty]) => ({
      qty,
      product: products[productId],
    }))
);

export const selectCartTotal = createSelector(
  selectCartProductItems,
  (productItems) => {
    const total = productItems.reduce((count, item) => {
      if (item.product) {
        const qty = Decimal(item.qty);
        const price = Decimal(item.product.price);
        return count.plus(price.times(qty));
      }
      return count;
    }, new Decimal(0));

    return total.toString();
  }
);
