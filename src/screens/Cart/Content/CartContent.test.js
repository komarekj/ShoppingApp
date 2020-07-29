import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import CartContent from './CartContent';

describe('CartContent screen component', () => {
  const onItemPress = jest.fn();
  const onItemRemovePress = jest.fn();
  const productItems = [
    {
      qty: 2,
      product: {
        id: 'testId1',
        title: 'testProduct',
        image: 'http://imageurl',
        price: 123.45,
        summary: 'testSummary',
        description: 'testDescription',
      },
    },
    {
      qty: 1,
      product: {
        id: 'testId2',
        title: 'testProduct',
        image: 'http://imageurl',
        price: 123.45,
        summary: 'testSummary',
        description: 'testDescription',
      },
    },
  ];

  test('should render with product items', async () => {
    const { getAllByTestId } = render(
      <CartContent
        productItems={productItems}
        onItemPress={onItemPress}
        onItemRemovePress={onItemRemovePress}
      />
    );

    const items = getAllByTestId('productItem');
    expect(items.length).toBe(2);
  });

  test('should trigger item press handler', async () => {
    const { getAllByTestId } = render(
      <CartContent
        productItems={productItems}
        onItemPress={onItemPress}
        onItemRemovePress={onItemRemovePress}
      />
    );

    const productTitles = getAllByTestId('productTitle');
    fireEvent.press(productTitles[0]);
    expect(onItemPress).toHaveBeenCalledTimes(1);
  });

  test('should trigger remove press handler', async () => {
    const { getAllByTestId } = render(
      <CartContent
        productItems={productItems}
        onItemPress={onItemPress}
        onItemRemovePress={onItemRemovePress}
      />
    );

    const removeButtons = getAllByTestId('removeButton');
    fireEvent.press(removeButtons[0]);
    expect(onItemRemovePress).toHaveBeenCalledTimes(1);
  });
});
