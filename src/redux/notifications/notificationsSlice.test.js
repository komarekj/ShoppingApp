import notificationReducer, {
  addNotification,
  deleteNotification,
} from './notificationsSlice';

describe('notification reducer', () => {
  describe('addNotification action', () => {
    test('should add new notification', () => {
      const state = { items: [] };
      const action = addNotification({
        message: 'testMessage',
        isError: false,
      });
      const results = notificationReducer(state, action);
      expect(results.items).toEqual([
        {
          id: 1,
          message: 'testMessage',
          isError: false,
        },
      ]);
    });
  });

  describe('deleteNotification action', () => {
    test('should remove notification', () => {
      const state = { items: [{ id: 'testId' }] };
      const action = deleteNotification({ id: 'testId' });
      const results = notificationReducer(state, action);
      expect(results.items).toEqual([]);
    });
  });
});
