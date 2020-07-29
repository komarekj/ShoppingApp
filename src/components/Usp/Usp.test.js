import React from 'react';
import { render } from 'react-native-testing-library';
import Usp from './Usp';

describe('Usp component', () => {
  test('should render with items', async () => {
    const items = [
      {
        title: 'testTitle1',
        content: 'testContent',
        icon: 'x',
      },
      {
        title: 'testTitle2',
        content: 'testContent',
        icon: 'x',
      },
    ];

    render(<Usp items={items} />);
  });
});
