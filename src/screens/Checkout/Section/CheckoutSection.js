import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Form, Card, CardItem } from 'native-base';
import { childrenType } from '~/types';
import styles from './CheckoutSection.styles';

const CheckoutSection = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Card>
        <CardItem>
          <Form style={styles.formWrap}>{children}</Form>
        </CardItem>
      </Card>
    </View>
  );
};

CheckoutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: childrenType.isRequired,
};

export default CheckoutSection;
