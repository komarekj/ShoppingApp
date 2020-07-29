import LoadingStatus from '~/constants/LoadingStatus';
import accountReducer, {
  setAuthState,
  setAccountDasboardStatus,
} from './accountSlice';
import {
  fetchLogin,
  fetchRegister,
  fetchAccountDashboard,
} from './accountThunks';

describe('account reducer', () => {
  describe('setAuthState action', () => {
    test('should set auth and initialized status', () => {
      const state = { isAuth: null, initialized: null };
      const action = setAuthState({ isAuth: true, initialized: true });
      const results = accountReducer(state, action);
      expect(results.isAuth).toBe(true);
      expect(results.initialized).toBe(true);
    });
  });

  describe('setAccountDasboardStatus action', () => {
    test('should set dashboard status', () => {
      const state = { dashboardStatus: null };
      const action = setAccountDasboardStatus({
        status: LoadingStatus.FINISHED,
      });
      const results = accountReducer(state, action);
      expect(results.dashboardStatus).toBe(LoadingStatus.FINISHED);
    });
  });

  describe('fetchLogin thunk', () => {
    test('should set login loading status on pending', () => {
      const state = { loginStatus: null };
      const results = accountReducer(state, fetchLogin.pending());
      expect(results.loginStatus).toBe(LoadingStatus.LOADING);
    });

    test('should set login error status on rejected', () => {
      const state = { loginStatus: null };
      const results = accountReducer(state, fetchLogin.rejected());
      expect(results.loginStatus).toBe(LoadingStatus.ERROR);
    });

    test('should set login finished status on fulfilled', () => {
      const state = { loginStatus: null };
      const results = accountReducer(state, fetchLogin.fulfilled());
      expect(results.loginStatus).toBe(LoadingStatus.FINISHED);
    });
  });

  describe('fetchRegister thunk', () => {
    test('should set register loading status on pending', () => {
      const state = { loginStatus: null };
      const results = accountReducer(state, fetchRegister.pending());
      expect(results.registerStatus).toBe(LoadingStatus.LOADING);
    });

    test('should set register error status on rejected', () => {
      const state = { loginStatus: null };
      const results = accountReducer(state, fetchRegister.rejected());
      expect(results.registerStatus).toBe(LoadingStatus.ERROR);
    });

    test('should set register finished status on fulfilled', () => {
      const state = { loginStatus: null };
      const results = accountReducer(state, fetchRegister.fulfilled());
      expect(results.registerStatus).toBe(LoadingStatus.FINISHED);
    });
  });

  describe('fetchRegister thunk', () => {
    test('should set dashboard loading status on pending', () => {
      const state = { dashboardStatus: null };
      const results = accountReducer(state, fetchAccountDashboard.pending());
      expect(results.dashboardStatus).toBe(LoadingStatus.LOADING);
    });

    test('should set register error status on rejected', () => {
      const state = { dashboardStatus: null };
      const results = accountReducer(state, fetchAccountDashboard.rejected());
      expect(results.dashboardStatus).toBe(LoadingStatus.ERROR);
    });

    test('should set register finished status and orders on fulfilled', () => {
      const state = { dashboardStatus: null };
      const orders = [{ id: 'testOrder' }];
      const results = accountReducer(
        state,
        fetchAccountDashboard.fulfilled({ orders })
      );
      expect(results.dashboardStatus).toBe(LoadingStatus.FINISHED);
      expect(results.orders).toEqual(orders);
    });
  });
});
