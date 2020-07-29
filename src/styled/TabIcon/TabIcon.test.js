import React from 'react';
import { render } from 'react-native-testing-library';
import TabIcon from './TabIcon';

describe('TabIcon styled component', () => {
  test('should render', async () => {
    const size = 10;
    const color = '#fff';
    const iconName = 'x';
    const count = 5;

    render(
      <TabIcon size={size} color={color} iconName={iconName} count={count} />
    );
  });
});
