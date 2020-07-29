import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const CartError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard
          message="We couldn't load your cart"
          isError
          isVisible
        />
      </Content>
    </Container>
  );
};

export default CartError;
