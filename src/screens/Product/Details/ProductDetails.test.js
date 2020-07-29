import React from 'react';
import { render } from 'react-native-testing-library';
import ProductDetails from './ProductDetails';

describe('ProductDetails screen component', () => {
  test('should render', () => {
    const title = 'testTitle';
    const summary = 'testSummary';
    const price = 123;
    render(<ProductDetails title={title} summary={summary} price={price} />);
  });
});
