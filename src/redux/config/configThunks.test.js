import { fetchConfig } from './configThunks';
import { getConfig } from '~/services/firebase/firestoreHandler';

jest.mock('~/services/firebase/firestoreHandler');

describe('config thunks', () => {
  describe('fetchConfig thunk', () => {
    test('should fetch config', async () => {
      const dispatch = jest.fn();
      const getState = jest.fn(() => ({}));
      const config = { testKey: 'testValue' };
      getConfig.mockReturnValueOnce(new Promise((resolve) => resolve(config)));

      const results = await fetchConfig()(dispatch, getState);

      expect(getConfig).toHaveBeenCalledTimes(1);
      expect(results.payload.config).toBe(config);
    });
  });
});
