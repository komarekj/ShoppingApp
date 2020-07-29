import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from 'sentry-expo';
import { firebaseApp } from '~/services/firebase';
import {
  getAccountOrders,
  createAccount,
} from '~/services/firebase/firestoreHandler';

export const fetchLogin = createAsyncThunk(
  'account/fetchLogin',
  async ({ email, password }) => {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }
);

export const fetchLogout = createAsyncThunk('account/fetchLogout', async () => {
  await firebaseApp.auth().signOut();
});

export const fetchRegister = createAsyncThunk(
  'account/fetchRegister',
  async ({ formData }) => {
    const { email, password, ...otherData } = formData;
    const registration = await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await createAccount(registration.user.uid, otherData);
  }
);

export const fetchAccountDashboard = createAsyncThunk(
  'account/fetchAccountDashboard',
  async () => {
    try {
      const user = firebaseApp.auth().currentUser;
      const orders = await getAccountOrders(user.uid);
      return { orders };
    } catch (err) {
      Sentry.captureException(err);
      throw err;
    }
  }
);
