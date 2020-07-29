const mockForm = {
  register: jest.fn(() => ({})),
  errors: {},
  watch: jest.fn((id, defaultValue) => defaultValue),
  handleSubmit: jest.fn((handler) => handler),
  setValue: jest.fn(),
  getValues: jest.fn(),
};

export default mockForm;
