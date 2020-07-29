/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content, View } from 'native-base';
import styles from './AccountDashboardSkeleton.styles';

const AccountDashboardSkeleton = () => {
  return (
    <Container>
      <Content padder>
        <View style={styles.title} />
        <View style={styles.button} />
        <View style={styles.items}>
          {[...Array(3)].map((item, idx) => (
            <View style={styles.item} key={idx} />
          ))}
        </View>
        <View style={styles.button} />
      </Content>
    </Container>
  );
};

export default AccountDashboardSkeleton;
