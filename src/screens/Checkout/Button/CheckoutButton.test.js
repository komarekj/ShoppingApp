import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import CheckoutButton from './CheckoutButton';

describe('CheckoutButton screen component', () => {
  test('should render and trigger press handler', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <CheckoutButton onPress={onPress} isLoading={false} />
    );

    const button = getByTestId('checkoutButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should render loading state', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <CheckoutButton onPress={onPress} isLoading />
    );

    getByTestId('checkoutButtonLoader');
  });
});
