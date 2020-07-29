const mockFirestoreObject = (fields, id) => {
  const object = {
    fields,
    id,
    exists: true,
    get(key) {
      return this.fields[key];
    },
    data() {
      return this.fields;
    },
    ref: {
      update: jest.fn(),
    },
  };

  return object;
};

export default mockFirestoreObject;
