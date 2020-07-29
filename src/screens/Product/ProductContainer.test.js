import React from 'react';
import { useRoute } from '@react-navigation/native';
import LoadingStatus from '~/constants/LoadingStatus';
import renderWithStore from '~/testUtils/renderWithStore';
import ProductContainer from './ProductContainer';

describe('Product screen container', () => {
  test('should render and trigger fetch action', () => {
    const state = {
      products: {
        status: {},
        entities: {},
      },
      wishlist: {
        items: [],
      },
    };

    useRoute.mockReturnValueOnce({ params: { id: 'testProductId' } });
    const { store } = renderWithStore(<ProductContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions[0].type).toBe('products/fetchProduct/pending');
    expect(dispatchActions[0].meta.arg.productId).toBe('testProductId');
  });

  test('should not trigger fetch action for existing status', () => {
    const state = {
      products: {
        status: {
          testProductId: LoadingStatus.LOADING,
        },
        entities: {},
      },
      wishlist: {
        items: [],
      },
    };

    useRoute.mockReturnValueOnce({ params: { id: 'testProductId' } });
    const { store } = renderWithStore(<ProductContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions.length).toBe(0);
  });
});
