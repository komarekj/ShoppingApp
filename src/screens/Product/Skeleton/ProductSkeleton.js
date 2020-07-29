/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content, View } from 'native-base';
// import styles from './ProductSkeleton.styles';

const ProductSkeleton = () => {
  const styles = {};

  return (
    <Container>
      <Content padder>
        <View style={styles.image} />
        <View style={styles.title} />
        <View style={styles.price} />
        <View style={styles.description}>
          {[...Array(4)].map((item, idx) => (
            <View style={styles.descriptionItem} key={idx} />
          ))}
        </View>
        <View style={styles.qty} />
        <View style={styles.addToCart} />
      </Content>
    </Container>
  );
};

export default ProductSkeleton;
