import { createSlice } from '@reduxjs/toolkit';
import LoadingStatus from '~/constants/LoadingStatus';
import { fetchNewOrder } from './checkoutThunks';

const initialState = {
  status: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckoutStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
  extraReducers: {
    // fetchNewOrder
    [fetchNewOrder.pending]: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    [fetchNewOrder.rejected]: (state) => {
      state.status = LoadingStatus.ERROR;
    },
    [fetchNewOrder.fulfilled]: (state) => {
      state.status = LoadingStatus.FINISHED;
    },
  },
});

export const { setCheckoutStatus } = checkoutSlice.actions;

export default checkoutSlice.reducer;
