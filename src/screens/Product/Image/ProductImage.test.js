import React from 'react';
import { render } from 'react-native-testing-library';
import ProductImage from './ProductImage';

describe('ProductImage screen component', () => {
  test('should render', () => {
    const image = 'https://testimage';
    render(<ProductImage image={image} />);
  });
});
