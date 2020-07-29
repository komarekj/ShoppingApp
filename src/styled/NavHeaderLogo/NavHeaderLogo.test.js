import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import NavHeaderLogo from './NavHeaderLogo';

describe('NavHeaderLogo styled component', () => {
  test('should render without press handler', async () => {
    render(<NavHeaderLogo />);
  });

  test('should render and trigger press handler', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<NavHeaderLogo onPress={onPress} />);

    const logo = getByTestId('headerLogo');
    fireEvent.press(logo);
    expect(onPress).toHaveBeenCalled();
  });
});
