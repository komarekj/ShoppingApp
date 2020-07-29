import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import LoadingStatus from '~/constants/LoadingStatus';
import { fetchConfig } from './configThunks';

const initialState = {
  status: null,
  homepage: {
    sections: [],
  },
  menu: {
    items: [],
  },
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  extraReducers: {
    // fetchConfig
    [fetchConfig.pending]: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    [fetchConfig.rejected]: (state) => {
      state.status = LoadingStatus.ERROR;
    },
    [fetchConfig.fulfilled]: (state, action) => {
      const { config } = action.payload;
      const { homepage, menu } = config;
      state.status = LoadingStatus.FINISHED;
      state.homepage = homepage;
      state.menu = menu;
    },
  },
});

const persistConfig = {
  key: 'config',
  storage: AsyncStorage,
};

export const configPersistedReducer = persistReducer(
  persistConfig,
  configSlice.reducer
);

export default configSlice.reducer;
