import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Button, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import styles from './CartCheckoutButton.styles';
import colors from '~/themes/colors';

const CartCheckoutButton = ({ onPress, style }) => {
  return (
    <Button
      onPress={onPress}
      style={[styles.button, style]}
      testID="checkoutButton"
    >
      <Feather name="shopping-cart" size={20} color={colors.primaryContrast} />
      <Text style={styles.label}>Checkout</Text>
    </Button>
  );
};

CartCheckoutButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

CartCheckoutButton.defaultProps = {
  style: null,
};

export default CartCheckoutButton;
