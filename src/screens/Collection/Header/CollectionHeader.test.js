import React from 'react';
import { render } from 'react-native-testing-library';
import CollectionHeader from './CollectionHeader';

describe('CollectionHeader screen component', () => {
  test('should render', () => {
    const collection = {
      title: 'testTitle',
      description: 'testDescription',
    };

    const { getByText } = render(<CollectionHeader collection={collection} />);

    getByText('testTitle');
    getByText('testDescription');
  });
});
