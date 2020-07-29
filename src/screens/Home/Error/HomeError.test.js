import React from 'react';
import { render } from 'react-native-testing-library';
import HomeError from './HomeError';

describe('HomeError screen component', () => {
  test('should render', () => {
    render(<HomeError />);
  });
});
