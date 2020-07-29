import React from 'react';
import { View } from 'native-base';
import { render, fireEvent } from 'react-native-testing-library';
import ProductGridList from './ProductGridList';

describe('ProductGridList component', () => {
  test('should render with products', () => {
    const products = [
      {
        id: 'testId',
        title: 'testProduct',
        image: 'http://imageurp',
        price: 123.45,
        summary: 'testSummary',
        description: 'testDescription',
      },
    ];
    const wishlist = ['testId'];
    const header = <View testID="listHeader" />;
    const onProductPress = jest.fn();

    const { getByTestId } = render(
      <ProductGridList
        products={products}
        header={header}
        wishlist={wishlist}
        onProductPress={onProductPress}
      />
    );

    getByTestId('listHeader');
    const productTitle = getByTestId('productTitle');
    fireEvent.press(productTitle);
    expect(onProductPress).toHaveBeenCalledWith('testId');
  });
});
