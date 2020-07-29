import React from 'react';
import { render } from 'react-native-testing-library';
import CartSkeleton from './CartSkeleton';

describe('CartSkeleton screen component', () => {
  test('should render', async () => {
    render(<CartSkeleton />);
  });
});
