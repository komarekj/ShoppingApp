import React from 'react';
import { View } from 'native-base';
import { render } from 'react-native-testing-library';
import LoadingStatus from '~/constants/LoadingStatus';
import withLoader from './withLoader';

describe('withLoader component', () => {
  const Content = () => <View testID="content" />;
  const Skeleton = () => <View testID="skeleton" />;
  const Error = () => <View testID="error" />;

  const ComponentWithLoader = withLoader(Content, Skeleton, Error);

  test('should render content for finished status', () => {
    const { getByTestId } = render(
      <ComponentWithLoader status={LoadingStatus.FINISHED} />
    );
    getByTestId('content');
  });

  test('should render skeleton for loading status', () => {
    const { getByTestId } = render(
      <ComponentWithLoader status={LoadingStatus.LOADING} />
    );
    getByTestId('skeleton');
  });

  test('should render error for error status', () => {
    const { getByTestId } = render(
      <ComponentWithLoader status={LoadingStatus.ERROR} />
    );
    getByTestId('error');
  });

  test('should render skeleton for null status', () => {
    const { getByTestId } = render(<ComponentWithLoader status={null} />);
    getByTestId('skeleton');
  });
});
