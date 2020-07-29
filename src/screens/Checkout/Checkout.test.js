import React from 'react';
import { fireEvent } from 'react-native-testing-library';
import { useNavigation } from '@react-navigation/native';
import LoadingStatus from '~/constants/LoadingStatus';
import screens from '~/constants/screens';
import renderWithStore from '~/testUtils/renderWithStore';
import Checkout from './Checkout';

jest.useFakeTimers();

describe('Checkout screen', () => {
  test('should render and trigger checkout handler', () => {
    const state = {
      checkout: {
        status: null,
      },
    };

    const { getByTestId, store } = renderWithStore(<Checkout />, state);

    const checkoutButton = getByTestId('checkoutButton');
    fireEvent.press(checkoutButton);
    const dispatchActions = store.getActions();
    expect(dispatchActions[0].type).toBe('checkout/fetchNewOrder/pending');
  });

  test('should render with error status', () => {
    const state = {
      checkout: {
        status: LoadingStatus.ERROR,
      },
    };

    const { getByTestId } = renderWithStore(<Checkout />, state);
    getByTestId('errorMessage');
  });

  test('should navigate to finished order with finished status', () => {
    const navigation = useNavigation();
    const state = {
      checkout: {
        status: LoadingStatus.FINISHED,
      },
    };

    renderWithStore(<Checkout />, state);

    expect(navigation.navigate).toHaveBeenCalledWith(screens.Tabs, {
      screen: screens.Shop,
    });
  });
});
