import React from 'react';
import { View } from 'native-base';
import { render } from 'react-native-testing-library';
import SideScroller from './SideScroller';

describe('SideScroller component', () => {
  test('should render with children', () => {
    const { getByTestId } = render(
      <SideScroller>
        <View testID="testChildren" />
      </SideScroller>
    );

    getByTestId('testChildren');
  });
});
