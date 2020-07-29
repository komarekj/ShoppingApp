import React from 'react';
import { render } from 'react-native-testing-library';
import ProductError from './ProductError';

describe('ProductError screen component', () => {
  test('should render', () => {
    const title = 'testTitle';
    const summary = 'testSummary';
    const price = 123;
    render(<ProductError title={title} summary={summary} price={price} />);
  });
});
