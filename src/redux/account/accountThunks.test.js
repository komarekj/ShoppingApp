import {
  createAccount,
  getAccountOrders,
} from '~/services/firebase/firestoreHandler';
import { firebaseApp } from '~/services/firebase';
import {
  fetchLogin,
  fetchLogout,
  fetchRegister,
  fetchAccountDashboard,
} from './accountThunks';

jest.mock('~/services/firebase/firestoreHandler');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('account thunks', () => {
  describe('fetchLogin thunk', () => {
    test('should login a user with email & password', async () => {
      const email = 'test@email.com';
      const password = 'testPassword';

      const signInWithEmailAndPassword = jest.fn();
      firebaseApp.auth.mockReturnValueOnce({
        signInWithEmailAndPassword,
      });

      const dispatch = jest.fn();
      await fetchLogin({ email, password })(dispatch);

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    });
  });

  describe('fetchLogout thunk', () => {
    test('should call sign out', async () => {
      const signOut = jest.fn();
      firebaseApp.auth.mockReturnValueOnce({
        signOut,
      });

      const dispatch = jest.fn();
      await fetchLogout()(dispatch);

      expect(signOut).toHaveBeenCalled();
    });
  });

  describe('fetchRegister thunk', () => {
    test('should register a user with form data', async () => {
      const email = 'test@email.com';
      const password = 'testPassword';
      const name = 'testName';

      const createUserWithEmailAndPassword = jest.fn(() => ({
        user: { uid: 'testUserId' },
      }));
      firebaseApp.auth.mockReturnValueOnce({
        createUserWithEmailAndPassword,
      });

      const dispatch = jest.fn();
      await fetchRegister({ formData: { email, password, name } })(dispatch);

      expect(createAccount).toHaveBeenCalledWith('testUserId', { name });
    });
  });

  describe('fetchAccountDashboard thunk', () => {
    test('should fetch user dashboard data', async () => {
      firebaseApp.auth.mockReturnValueOnce({
        currentUser: { uid: 'testUserId' },
      });

      getAccountOrders.mockReturnValueOnce(
        new Promise((resolve) => resolve([{ id: 'order1' }]))
      );

      const dispatch = jest.fn();
      const results = await fetchAccountDashboard()(dispatch);

      expect(getAccountOrders).toHaveBeenCalledWith('testUserId');
      expect(results.payload.orders).toEqual([{ id: 'order1' }]);
    });
  });
});
