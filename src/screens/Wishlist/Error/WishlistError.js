import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const WishlistError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard
          message="We couldn't load your wishlist"
          isError
          isVisible
        />
      </Content>
    </Container>
  );
};

export default WishlistError;
