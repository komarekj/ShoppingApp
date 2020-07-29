import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text } from 'native-base';
import formatPrice from '~/helpers/formatPrice';
import styles from './CartTotal.styles';

const CartTotal = ({ total }) => {
  return (
    <Card>
      <CardItem style={styles.container}>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.value}>{formatPrice(total)}</Text>
      </CardItem>
    </Card>
  );
};

CartTotal.propTypes = {
  total: PropTypes.string.isRequired,
};

export default CartTotal;
