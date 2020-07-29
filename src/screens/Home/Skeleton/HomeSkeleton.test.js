import React from 'react';
import { render } from 'react-native-testing-library';
import HomeSkeleton from './HomeSkeleton';

describe('HomeSkeleton screen component', () => {
  test('should render', () => {
    render(<HomeSkeleton />);
  });
});
