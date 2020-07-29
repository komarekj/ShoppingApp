import React from 'react';
import renderWithStore from '~/testUtils/renderWithStore';
import LoadingStatus from '~/constants/LoadingStatus';
import CartContainer from './CartContainer';

describe('Cart screen container', () => {
  test('should render and trigger fetch action', () => {
    const state = {
      cart: {
        status: null,
        items: {},
      },
      products: {
        entities: {},
      },
    };

    const { store } = renderWithStore(<CartContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions[0].type).toBe('cart/fetchCartProducts/pending');
  });

  test('should not trigger fetch action with existing status', () => {
    const state = {
      cart: {
        status: LoadingStatus.LOADING,
        items: {},
      },
      products: {
        entities: {},
      },
    };

    const { store } = renderWithStore(<CartContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions.length).toBe(0);
  });
});
