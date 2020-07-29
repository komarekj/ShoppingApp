import React from 'react';
import { render } from 'react-native-testing-library';
import WishlistHeader from './WishlistHeader';

describe('WishlistHeader screen component', () => {
  test('should render', () => {
    render(<WishlistHeader />);
  });
});
