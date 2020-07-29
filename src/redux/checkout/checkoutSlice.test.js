import LoadingStatus from '~/constants/LoadingStatus';
import checkoutReducer, { setCheckoutStatus } from './checkoutSlice';
import { fetchNewOrder } from './checkoutThunks';

describe('checkout reducer', () => {
  describe('setCheckoutStatus action', () => {
    test('should set checkout status', () => {
      const state = { status: null };
      const results = checkoutReducer(
        state,
        setCheckoutStatus({ status: LoadingStatus.FINISHED })
      );
      expect(results.status).toBe(LoadingStatus.FINISHED);
    });
  });
  describe('fetchNewOrder thunk', () => {
    test('should set loading status on pending', () => {
      const state = { status: null };
      const results = checkoutReducer(state, fetchNewOrder.pending());
      expect(results.status).toBe(LoadingStatus.LOADING);
    });

    test('should set error status on rejected', () => {
      const state = { status: null };
      const results = checkoutReducer(state, fetchNewOrder.rejected());
      expect(results.status).toBe(LoadingStatus.ERROR);
    });

    test('should set finished status on fulfilled', () => {
      const state = { status: null };
      const results = checkoutReducer(state, fetchNewOrder.fulfilled());
      expect(results.status).toBe(LoadingStatus.FINISHED);
    });
  });
});
