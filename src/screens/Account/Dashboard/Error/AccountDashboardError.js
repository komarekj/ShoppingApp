import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const AccountDashboardError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard
          message="We couldn't load your account"
          isError
          isVisible
        />
      </Content>
    </Container>
  );
};

export default AccountDashboardError;
