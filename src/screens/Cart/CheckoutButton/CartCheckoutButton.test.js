import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import CartCheckoutButton from './CartCheckoutButton';

describe('CartCheckoutButton screen component', () => {
  test('should render and trigger press handler', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<CartCheckoutButton onPress={onPress} />);

    const button = getByTestId('checkoutButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
