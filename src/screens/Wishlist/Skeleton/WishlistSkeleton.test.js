import React from 'react';
import { render } from 'react-native-testing-library';
import WishlistSkeleton from './WishlistSkeleton';

describe('WishlistSkeleton screen component', () => {
  test('should render', () => {
    render(<WishlistSkeleton />);
  });
});
