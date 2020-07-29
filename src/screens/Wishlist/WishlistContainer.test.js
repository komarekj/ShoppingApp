import React from 'react';
import LoadingStatus from '~/constants/LoadingStatus';
import renderWithStore from '~/testUtils/renderWithStore';
import WishlistContainer from './WishlistContainer';

describe('Wishlist screen container', () => {
  test('should render and trigger fetch action', () => {
    const state = {
      wishlist: {
        status: null,
        items: [],
      },
      products: {
        status: {},
        entities: {},
      },
    };

    const { store } = renderWithStore(<WishlistContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions[0].type).toBe(
      'wishlist/fetchWishlistProducts/pending'
    );
  });

  test('should not trigger fetch action for existing status', () => {
    const state = {
      wishlist: {
        status: LoadingStatus.LOADING,
        items: [],
      },
      products: {
        status: {},
        entities: {},
      },
    };

    const { store } = renderWithStore(<WishlistContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions.length).toBe(0);
  });
});
