import React from 'react';
import { render } from 'react-native-testing-library';
import ProductSkeleton from './ProductSkeleton';

describe('ProductSkeleton screen component', () => {
  test('should render', () => {
    render(<ProductSkeleton />);
  });
});
