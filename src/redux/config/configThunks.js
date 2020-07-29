import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Sentry from 'sentry-expo';
import { getConfig } from '~/services/firebase/firestoreHandler';

// eslint-disable-next-line import/prefer-default-export
export const fetchConfig = createAsyncThunk('config/fetchConfig', async () => {
  try {
    const config = await getConfig();
    return { config };
  } catch (err) {
    Sentry.captureException(err);
    throw err;
  }
});
