import React from 'react';
import { render } from 'react-native-testing-library';
import CartError from './CartError';

describe('CartError screen component', () => {
  test('should render', async () => {
    render(<CartError />);
  });
});
