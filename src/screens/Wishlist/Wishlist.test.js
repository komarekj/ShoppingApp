import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fireEvent } from 'react-native-testing-library';
import { toggleWishlist } from '~/redux/wishlist';
import { addToCart } from '~/redux/cart';
import renderWithStore from '~/testUtils/renderWithStore';
import screens from '~/constants/screens';
import Wishlist from './Wishlist';

describe('Wishlist screen', () => {
  test('should render and trigger press handlers', () => {
    const products = [
      {
        id: 'testId',
        title: 'testProduct',
        image: 'http://imageurl',
        price: 123.45,
        summary: 'testSummary',
        description: 'testDescription',
      },
    ];
    const wishlist = [];

    const { getByTestId, store } = renderWithStore(
      <Wishlist products={products} wishlist={wishlist} />,
      {}
    );

    const productTitle = getByTestId('productTitle');
    fireEvent.press(productTitle);
    const navigation = useNavigation();
    expect(navigation.navigate).toHaveBeenCalledWith(screens.Shop, {
      screen: screens.Product,
      params: { id: 'testId' },
    });

    const dispatchActions = store.getActions();

    const addToWishlistBtn = getByTestId('addToWishlistBtn');
    fireEvent.press(addToWishlistBtn);
    expect(dispatchActions[0]).toEqual(toggleWishlist({ productId: 'testId' }));

    const addToCartBtn = getByTestId('addToCartBtn');
    fireEvent.press(addToCartBtn);
    expect(dispatchActions[1]).toEqual(addToCart({ productId: 'testId' }));
  });

  test('should redner an empty state', () => {
    const products = [];
    const wishlist = [];

    const { getByTestId } = renderWithStore(
      <Wishlist products={products} wishlist={wishlist} />,
      {}
    );

    getByTestId('emptyState');
  });
});
