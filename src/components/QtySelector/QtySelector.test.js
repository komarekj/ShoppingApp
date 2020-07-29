import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import QtySelector from './QtySelector';

describe('QtySelector component', () => {
  test('should render and call qty change handler', () => {
    const qty = 1;
    const onQtyChange = jest.fn();

    const { getByTestId } = render(
      <QtySelector qty={qty} onQtyChange={onQtyChange} />
    );

    const minusBtn = getByTestId('minusBtn');
    const plusBtn = getByTestId('plusBtn');

    fireEvent.press(plusBtn);
    expect(onQtyChange).toHaveBeenCalledWith(2);

    fireEvent.press(minusBtn);
    expect(onQtyChange).toHaveBeenCalledWith(1);
  });
});
