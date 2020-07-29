import React from 'react';
import { render } from 'react-native-testing-library';
import ProductDescription from './ProductDescription';

describe('ProductDescription screen component', () => {
  test('should render', () => {
    const content = 'testContent';
    render(<ProductDescription content={content} />);
  });
});
