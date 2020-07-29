import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fireEvent } from 'react-native-testing-library';
import renderWithStore from '~/testUtils/renderWithStore';
import screens from '~/constants/screens';
import Cart from './Cart';

jest.useFakeTimers();

describe('Cart screen', () => {
  test('should render and trigger press handlers', () => {
    const navigation = useNavigation();
    const total = '123';
    const productItems = [
      {
        qty: 2,
        product: {
          id: 'testId',
          title: 'testProduct',
          image: 'http://imageurl',
          price: 123.45,
          summary: 'testSummary',
          description: 'testDescription',
        },
      },
    ];

    const { getByTestId, getAllByTestId, store } = renderWithStore(
      <Cart productItems={productItems} total={total} />,
      {}
    );

    const productTitle = getByTestId('productTitle');
    fireEvent.press(productTitle);
    expect(navigation.navigate).toHaveBeenCalledWith(screens.Shop, {
      screen: screens.Product,
      params: { id: 'testId' },
    });

    const removeButton = getByTestId('removeButton');
    fireEvent.press(removeButton);
    const dispatchActions = store.getActions();
    expect(dispatchActions[0].type).toBe('cart/removeFromCart');
    expect(dispatchActions[0].payload.productId).toBe('testId');

    expect(navigation.navigate).toHaveBeenCalledWith(
      screens.Shop,
      expect.anything()
    );

    const checkoutButtons = getAllByTestId('checkoutButton');
    fireEvent.press(checkoutButtons[0]);
    expect(navigation.navigate).toHaveBeenCalledWith(screens.Checkout);
  });

  test('should redner an empty state', () => {
    const productItems = [];

    const { getByTestId } = renderWithStore(
      <Cart productItems={productItems} total="0" />,
      {}
    );

    getByTestId('emptyState');
  });
});
