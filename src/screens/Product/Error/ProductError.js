import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const ProductError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard
          message="We couldn't load the product"
          isError
          isVisible
        />
      </Content>
    </Container>
  );
};

export default ProductError;
