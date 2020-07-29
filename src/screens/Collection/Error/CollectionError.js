import React from 'react';
import { Container, Content } from 'native-base';
import NotificationCard from '~/components/NotificationCard';

const CollectionError = () => {
  return (
    <Container>
      <Content padder>
        <NotificationCard
          message="We couldn't load the collection"
          isError
          isVisible
        />
      </Content>
    </Container>
  );
};

export default CollectionError;
