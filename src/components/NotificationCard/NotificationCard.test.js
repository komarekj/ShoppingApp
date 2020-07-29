import React from 'react';
import { render } from 'react-native-testing-library';
import NotificationCard from './NotificationCard';

describe('NotificationCard component', () => {
  const message = 'testMessage';

  test('should render success message', async () => {
    const { getByTestId } = render(
      <NotificationCard message={message} isVisible />
    );
    getByTestId('successMessage');
  });

  test('should render error message', async () => {
    const { getByTestId } = render(
      <NotificationCard message={message} isVisible isError />
    );
    getByTestId('errorMessage');
  });

  test('should not render is not visible', async () => {
    render(<NotificationCard message={message} isVisible={false} />);
  });
});
