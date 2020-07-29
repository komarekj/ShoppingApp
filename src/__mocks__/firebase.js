function returnSelf() {
  return this;
}
const mockFirestore = {
  collection: jest.fn(returnSelf),
  where: jest.fn(returnSelf),
  orderBy: jest.fn(returnSelf),
  get: jest.fn(returnSelf),
  getAll: jest.fn(returnSelf),
  add: jest.fn(returnSelf),
  set: jest.fn(returnSelf),
  doc: jest.fn(returnSelf),
  limit: jest.fn(returnSelf),
  update: jest.fn(returnSelf),
  batch: jest.fn(returnSelf),
  commit: jest.fn(returnSelf),
  startAfter: jest.fn(returnSelf),
};

const mockFirebaseApp = {
  firestore: () => mockFirestore,
  auth: jest.fn(() => ({})),
};

// eslint-disable-next-line import/prefer-default-export
export const initializeApp = () => mockFirebaseApp;
export const firestore = {
  FieldPath: {
    documentId: jest.fn(() => 'documentId'),
  },
};
