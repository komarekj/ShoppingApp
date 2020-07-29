import { createSlice } from '@reduxjs/toolkit';
import LoadingStatus from '~/constants/LoadingStatus';
import {
  fetchLogin,
  fetchRegister,
  fetchAccountDashboard,
} from './accountThunks';

const initialState = {
  loginStatus: null,
  registerStatus: null,
  dashboardStatus: null,
  isAuth: null,
  initialized: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      const { isAuth, initialized } = action.payload;
      state.isAuth = isAuth;
      state.initialized = initialized;
    },
    setAccountDasboardStatus: (state, action) => {
      state.dashboardStatus = action.payload.status;
    },
  },
  extraReducers: {
    // fetchLogin
    [fetchLogin.pending]: (state) => {
      state.loginStatus = LoadingStatus.LOADING;
    },
    [fetchLogin.rejected]: (state) => {
      state.loginStatus = LoadingStatus.ERROR;
    },
    [fetchLogin.fulfilled]: (state) => {
      state.loginStatus = LoadingStatus.FINISHED;
    },

    // fetchRegister
    [fetchRegister.pending]: (state) => {
      state.registerStatus = LoadingStatus.LOADING;
    },
    [fetchRegister.rejected]: (state) => {
      state.registerStatus = LoadingStatus.ERROR;
    },
    [fetchRegister.fulfilled]: (state) => {
      state.registerStatus = LoadingStatus.FINISHED;
    },

    // fetchAccountDashboard
    [fetchAccountDashboard.pending]: (state) => {
      state.dashboardStatus = LoadingStatus.LOADING;
    },
    [fetchAccountDashboard.rejected]: (state) => {
      state.dashboardStatus = LoadingStatus.ERROR;
    },
    [fetchAccountDashboard.fulfilled]: (state, action) => {
      const { orders } = action.payload;
      state.dashboardStatus = LoadingStatus.FINISHED;
      state.orders = orders;
    },
  },
});

export const { setAuthState, setAccountDasboardStatus } = accountSlice.actions;

export default accountSlice.reducer;
