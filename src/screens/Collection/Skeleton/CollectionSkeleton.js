/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content, View } from 'native-base';
import styles from './CollectionSkeleton.styles';

const CollectionSkeleton = () => {
  return (
    <Container>
      <Content padder>
        <View style={styles.title} />
        <View style={styles.description}>
          {[...Array(3)].map((item, idx) => (
            <View style={styles.descriptionItem} key={idx} />
          ))}
        </View>
        <View style={styles.productList}>
          {[...Array(6)].map((item, idx) => (
            <View style={styles.productListItem} key={idx} />
          ))}
        </View>
      </Content>
    </Container>
  );
};

export default CollectionSkeleton;
