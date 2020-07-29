import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Spinner } from 'native-base';
import colors from '~/themes/colors';
import styles from './CheckoutButton.styles';

const CheckoutButton = ({ isLoading, onPress }) => {
  return (
    <Button
      onPress={onPress}
      style={styles.button}
      disabled={isLoading}
      testID="checkoutButton"
    >
      {isLoading ? (
        <Spinner testID="checkoutButtonLoader" color={colors.primaryContrast} />
      ) : (
        <Text style={styles.buttonLabel}>Checkout</Text>
      )}
    </Button>
  );
};

CheckoutButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CheckoutButton;
