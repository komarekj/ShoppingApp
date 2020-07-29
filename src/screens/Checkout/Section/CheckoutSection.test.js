import React from 'react';
import { View } from 'native-base';
import { render } from 'react-native-testing-library';
import CheckoutSection from './CheckoutSection';

describe('CheckoutSection screen component', () => {
  test('should render with children', async () => {
    const title = 'testTitle';

    const { getByText, getByTestId } = render(
      <CheckoutSection title={title}>
        <View testID="testChildren" />
      </CheckoutSection>
    );

    getByText('testTitle');
    getByTestId('testChildren');
  });
});
