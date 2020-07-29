/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { render } from 'react-native-testing-library';
import configureStore from 'redux-mock-store';

const StoreWrapperWithState = (store) => ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const renderWithStore = (component, state) => {
  const middlewares = getDefaultMiddleware();
  const mockStore = configureStore(middlewares);
  const store = mockStore(state);
  const StoreWrapper = StoreWrapperWithState(store);
  return { ...render(component, { wrapper: StoreWrapper }), store };
};

export default renderWithStore;
