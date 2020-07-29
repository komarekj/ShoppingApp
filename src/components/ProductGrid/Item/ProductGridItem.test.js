import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ProductGridItem from './ProductGridItem';

describe('ProductGridItem component', () => {
  test('should render and trigger press handler', () => {
    const product = {
      id: 'testId',
      title: 'testProduct',
      image: 'http://imageurl',
      price: 123.45,
      summary: 'testSummary',
      description: 'testDescription',
    };
    const onPress = jest.fn();

    const { getByTestId } = render(
      <ProductGridItem product={product} onPress={onPress} />
    );

    const productTitle = getByTestId('productTitle');
    fireEvent.press(productTitle);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
