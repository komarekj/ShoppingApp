import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const MenuError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard message="We couldn't load menu" isError isVisible />
      </Content>
    </Container>
  );
};

export default MenuError;
