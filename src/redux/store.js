import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import account from './account';
import { cartPersistedReducer } from './cart';
import checkout from './checkout';
import collections from './collections';
import { configPersistedReducer } from './config';
import notifications from './notifications';
import products from './products';
import userInterface from './userInterface';
import { wishlistPersistedReducer } from './wishlist';

const middlewares = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    account,
    cart: cartPersistedReducer,
    checkout,
    collections,
    config: configPersistedReducer,
    notifications,
    products,
    userInterface,
    wishlist: wishlistPersistedReducer,
  },
  middleware: middlewares,
});

export const persistor = persistStore(store);
