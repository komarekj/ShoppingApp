import React from 'react';
import { render } from 'react-native-testing-library';
import EmptyState from './EmptyState';

describe('EmptyState component', () => {
  test('should render', () => {
    const content = 'testContent';
    render(<EmptyState content={content} />);
  });
});
