import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ProductGridSlider from './ProductGridSlider';

describe('ProductGridSlider component', () => {
  test('should render with products', async () => {
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
    const onProductPress = jest.fn();
    const onAddToCartPress = jest.fn();

    const { getByTestId } = render(
      <ProductGridSlider
        products={products}
        onProductPress={onProductPress}
        onAddToCartPress={onAddToCartPress}
      />
    );

    const addToCartBtn = getByTestId('addToCartBtn');
    fireEvent.press(addToCartBtn);
    expect(onAddToCartPress).toHaveBeenCalled();
  });
});
