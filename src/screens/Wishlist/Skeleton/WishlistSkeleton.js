/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content, View } from 'native-base';
import styles from './WishlistSkeleton.styles';

const WishlistSkeleton = () => {
  return (
    <Container>
      <Content padder>
        <View style={styles.title} />
        <View style={styles.links}>
          {[...Array(6)].map((item, idx) => (
            <View style={styles.linksItem} key={idx} />
          ))}
        </View>
      </Content>
    </Container>
  );
};

export default WishlistSkeleton;
