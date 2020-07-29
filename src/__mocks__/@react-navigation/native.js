const navigation = {
  push: jest.fn(),
  navigate: jest.fn(),
  reset: jest.fn(),
};

export const useNavigation = () => navigation;

export const useRoute = jest.fn();
