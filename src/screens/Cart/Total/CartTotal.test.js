import React from 'react';
import { render } from 'react-native-testing-library';
import CartTotal from './CartTotal';

describe('CartTotal screen component', () => {
  test('should render', async () => {
    const total = '100';
    render(<CartTotal total={total} />);
  });
});
