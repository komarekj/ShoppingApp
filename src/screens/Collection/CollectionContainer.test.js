import React from 'react';
import { useRoute } from '@react-navigation/native';
import LoadingStatus from '~/constants/LoadingStatus';
import renderWithStore from '~/testUtils/renderWithStore';
import CollectionContainer from './CollectionContainer';

describe('Collection screen container', () => {
  test('should render and trigger fetch action', () => {
    const state = {
      collections: {
        status: {},
        entities: {},
      },
      products: {
        entities: {},
      },
      wishlist: {
        items: [],
      },
    };

    useRoute.mockReturnValueOnce({ params: { id: 'testCollectionId' } });
    const { store } = renderWithStore(<CollectionContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions[0].type).toBe('collections/fetchCollection/pending');
    expect(dispatchActions[0].meta.arg.collectionId).toBe('testCollectionId');
  });

  test('should not trigger fetch action with existing status', () => {
    const state = {
      collections: {
        status: {
          testCollectionId: LoadingStatus.LOADING,
        },
        entities: {},
      },
      products: {
        entities: {},
      },
      wishlist: {
        items: [],
      },
    };

    useRoute.mockReturnValueOnce({ params: { id: 'testCollectionId' } });
    const { store } = renderWithStore(<CollectionContainer />, state);
    const dispatchActions = store.getActions();
    expect(dispatchActions.length).toBe(0);
  });

  test('should map collection products', () => {
    const state = {
      collections: {
        status: {},
        entities: {
          testCollectionId: {
            products: ['testProductId'],
          },
        },
      },
      products: {
        entities: {
          testProductId: {
            id: 'testProductId',
          },
        },
      },
      wishlist: {
        items: [],
      },
    };

    useRoute.mockReturnValueOnce({ params: { id: 'testCollectionId' } });
    renderWithStore(<CollectionContainer />, state);
  });
});
