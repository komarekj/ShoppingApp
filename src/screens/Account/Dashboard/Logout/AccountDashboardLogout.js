import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import styles from './AccountDashboardLogout.styles';

const AccountDashboardLogout = ({ onPress }) => {
  return (
    <Button onPress={onPress} style={styles.button}>
      <Text style={styles.buttonTitle}>Log Out</Text>
    </Button>
  );
};

AccountDashboardLogout.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AccountDashboardLogout;
