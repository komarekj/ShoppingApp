import React from 'react';
import * as Sentry from 'sentry-expo';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';
import { childrenType } from '~/types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    Sentry.captureException(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Container>
          <Content padder>
            <NotificationCard
              message="Something went wrong."
              isError
              isVisible
            />
          </Content>
        </Container>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: childrenType.isRequired,
};

export default ErrorBoundary;
