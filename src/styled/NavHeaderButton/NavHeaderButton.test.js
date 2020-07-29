import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import NavHeaderButton from './NavHeaderButton';

describe('NavHeaderButton styled component', () => {
  test('should render and trigger press handler', async () => {
    const icon = 'x';
    const onPress = jest.fn();

    const { getByTestId } = render(
      <NavHeaderButton icon={icon} onPress={onPress} />
    );

    const button = getByTestId('headerButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
