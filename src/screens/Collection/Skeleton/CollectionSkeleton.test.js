import React from 'react';
import { render } from 'react-native-testing-library';
import CollectionSkeleton from './CollectionSkeleton';

describe('CollectionSkeleton screen component', () => {
  test('should render', () => {
    render(<CollectionSkeleton />);
  });
});
