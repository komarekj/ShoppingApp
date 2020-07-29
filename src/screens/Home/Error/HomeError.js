import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const HomeError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard
          message="We couldn't load homepage"
          isError
          isVisible
        />
      </Content>
    </Container>
  );
};

export default HomeError;
