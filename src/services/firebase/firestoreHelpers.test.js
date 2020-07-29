import mockFirestoreObject from '~/testUtils/mockFirestoreObject';
import { getData } from './firestoreHelpers';

describe('firestore service helpers', () => {
  describe('getData', () => {
    test('should format firestore object', () => {
      const firestoreObj = mockFirestoreObject(
        {
          title: 'testTitle',
          name: null,
          date: { toMillis: () => 0 },
        },
        'testId'
      );
      const data = getData(firestoreObj);
      expect(data).toEqual({
        title: 'testTitle',
        name: null,
        date: 0,
        id: 'testId',
      });
    });
  });
});
