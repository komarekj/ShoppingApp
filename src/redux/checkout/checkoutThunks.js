import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from 'sentry-expo';
import { createNewOrder } from '~/services/firebase/firestoreHandler';
import { firebaseApp } from '~/services/firebase';
import {
  selectCartProductItems,
  selectCartTotal,
  clearCart,
} from '~/redux/cart';
import { setAccountDasboardStatus } from '~/redux/account';
import { addNotification } from '~/redux/notifications';

// eslint-disable-next-line import/prefer-default-export
export const fetchNewOrder = createAsyncThunk(
  'checkout/fetchNewOrder',
  async ({ formData }, { getState, dispatch }) => {
    const state = getState();
    const items = selectCartProductItems(state);
    const total = selectCartTotal(state);

    try {
      const user = firebaseApp.auth().currentUser;
      const userId = user ? user.uid : null;
      await createNewOrder({
        ...formData,
        created: new Date(),
        status: 'Processing',
        items,
        total,
        userId,
      });
      dispatch(clearCart());
      dispatch(setAccountDasboardStatus({ status: null }));
      dispatch(
        addNotification({
          message: 'Thank you for your order!',
          isError: false,
        })
      );
    } catch (err) {
      Sentry.captureException(err);
      throw err;
    }
  }
);
