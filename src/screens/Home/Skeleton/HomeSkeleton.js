/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content, View } from 'native-base';
import styles from './HomeSkeleton.styles';

const HomeSkeleton = () => {
  return (
    <Container>
      <Content padder>
        <View style={styles.banner} />
        <View style={styles.uspList}>
          {[...Array(2)].map((item, idx) => (
            <View style={styles.uspListItem} key={idx}>
              <View style={styles.uspListItemIcon} />
              <View style={styles.uspListItemTitle} />
            </View>
          ))}
        </View>
        <View style={styles.productList}>
          {[...Array(2)].map((item, idx) => (
            <View style={styles.productListItem} key={idx} />
          ))}
        </View>
        <View style={styles.links}>
          {[...Array(4)].map((item, idx) => (
            <View style={styles.linksItem} key={idx} />
          ))}
        </View>
      </Content>
    </Container>
  );
};

export default HomeSkeleton;
