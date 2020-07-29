import { createSelector } from '@reduxjs/toolkit';

const selectWishlistItems = (state) => state.wishlist.items;
const selectProducts = (state) => state.products.entities;

export const selectWishlistCount = createSelector(
  selectWishlistItems,
  (items) => items.length
);

export const selectWishlistProducts = createSelector(
  selectWishlistItems,
  selectProducts,
  (items, products) => items.map((productId) => products[productId])
);
