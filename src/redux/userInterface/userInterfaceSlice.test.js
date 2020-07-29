import userInterfaceReducer, { setNavOpen } from './userInterfaceSlice';

describe('user interface reducer', () => {
  describe('setNavOpen action', () => {
    test('should set nav status to open', () => {
      const state = { navOpen: false };
      const results = userInterfaceReducer(state, setNavOpen({ open: true }));
      expect(results.navOpen).toBe(true);
    });
  });
});
