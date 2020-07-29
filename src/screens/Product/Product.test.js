import React from 'react';
import { fireEvent } from 'react-native-testing-library';
import renderWithStore from '~/testUtils/renderWithStore';
import { toggleWishlist } from '~/redux/wishlist';
import Product from './Product';

jest.useFakeTimers();

describe('Product screen', () => {
  test('should render and trigger add to cart handler ', () => {
    const product = {
      id: 'testId',
      title: 'testProduct',
      image: 'http://imageurl',
      price: 123.45,
      summary: 'testSummary',
      description: 'testDescription',
    };

    const { getByTestId, store } = renderWithStore(
      <Product product={product} isInWishlist={false} />
    );

    const addToCartBtn = getByTestId('addToCartBtn');
    fireEvent.press(addToCartBtn);

    const addToWishlistBtn = getByTestId('addToWishlistBtn');
    fireEvent.press(addToWishlistBtn);

    const dispatchActions = store.getActions();

    expect(dispatchActions[0].type).toBe('cart/addToCart');
    expect(dispatchActions[0].payload.productId).toBe('testId');
    expect(dispatchActions[0].payload.qty).toBe(1);

    expect(dispatchActions[2]).toEqual(toggleWishlist({ productId: 'testId' }));
  });
});
