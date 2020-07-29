import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fireEvent } from 'react-native-testing-library';
import { toggleWishlist } from '~/redux/wishlist';
import { addToCart } from '~/redux/cart';
import renderWithStore from '~/testUtils/renderWithStore';
import screens from '~/constants/screens';
import Collection from './Collection';

describe('Collection screen', () => {
  test('should render and trigger press handlers', () => {
    const collection = {
      title: 'testCollectionTitle',
      description: 'testCollectionDescription',
    };

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

    const wishlist = ['testId'];

    const { store, getByTestId } = renderWithStore(
      <Collection
        collection={collection}
        products={products}
        wishlist={wishlist}
      />,
      {}
    );

    const navigation = useNavigation();
    const productTitle = getByTestId('productTitle');
    fireEvent.press(productTitle);
    expect(navigation.push).toHaveBeenCalledWith(screens.Product, {
      id: 'testId',
    });

    const dispatchActions = store.getActions();

    const addToWishlistBtn = getByTestId('addToWishlistBtn');
    fireEvent.press(addToWishlistBtn);
    expect(dispatchActions[0]).toEqual(toggleWishlist({ productId: 'testId' }));

    const addToCartBtn = getByTestId('addToCartBtn');
    fireEvent.press(addToCartBtn);
    expect(dispatchActions[1]).toEqual(addToCart({ productId: 'testId' }));
  });
});
