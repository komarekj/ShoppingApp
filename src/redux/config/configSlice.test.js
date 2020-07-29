import LoadingStatus from '~/constants/LoadingStatus';
import configReducer from './configSlice';
import { fetchConfig } from './configThunks';

describe('config reducer', () => {
  describe('fetchConfig thunk', () => {
    test('should set loading status on pending', () => {
      const state = { status: null };
      const results = configReducer(state, fetchConfig.pending());
      expect(results.status).toEqual(LoadingStatus.LOADING);
    });

    test('should set error status on rejected', () => {
      const state = { status: null };
      const results = configReducer(state, fetchConfig.rejected());
      expect(results.status).toEqual(LoadingStatus.ERROR);
    });

    test('should set finished status and data on fulfilled', () => {
      const state = { status: null };
      const action = fetchConfig.fulfilled({
        config: {
          homepage: {
            sections: ['testHomepageItem'],
          },
          menu: {
            items: ['testNavItem'],
          },
        },
      });
      const results = configReducer(state, action);
      expect(results.status).toEqual(LoadingStatus.FINISHED);
      expect(results.homepage.sections[0]).toEqual('testHomepageItem');
      expect(results.menu.items[0]).toEqual('testNavItem');
    });
  });
});
