import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ProductAddToCart from './ProductAddToCart';

describe('ProductAddToCart screen component', () => {
  test('should render and trigger press handler', () => {
    const onPress = jest.fn();
    const onWishlistPress = jest.fn();

    const { getByTestId } = render(
      <ProductAddToCart
        onPress={onPress}
        onWishlistPress={onWishlistPress}
        isInWishlist={false}
      />
    );

    const addToCartBtn = getByTestId('addToCartBtn');
    fireEvent.press(addToCartBtn);
    expect(onPress).toHaveBeenCalledTimes(1);

    const addToWishlistBtn = getByTestId('addToWishlistBtn');
    fireEvent.press(addToWishlistBtn);
    expect(onWishlistPress).toHaveBeenCalledTimes(1);
  });

  test('should render with in wishlist status', () => {
    const onPress = jest.fn();
    const onWishlistPress = jest.fn();

    render(
      <ProductAddToCart
        onPress={onPress}
        onWishlistPress={onWishlistPress}
        isInWishlist
      />
    );
  });
});
