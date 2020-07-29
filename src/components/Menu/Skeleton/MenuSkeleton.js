/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content, View } from 'native-base';
import styles from './MenuSkeleton.styles';

const MenuSkeleton = () => {
  return (
    <Container>
      <Content padder>
        <View style={styles.links}>
          {[...Array(10)].map((item, idx) => (
            <View style={styles.linksItem} key={idx} />
          ))}
        </View>
      </Content>
    </Container>
  );
};

export default MenuSkeleton;
