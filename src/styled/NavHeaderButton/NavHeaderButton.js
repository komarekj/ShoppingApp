import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import colors from '~/themes/colors';
import styles from './NavHeaderButton.styles';

const NavHeaderButton = ({ icon, onPress, style }) => {
  return (
    <Button
      transparent
      onPress={onPress}
      style={[styles.button, style]}
      testID="headerButton"
    >
      <Feather name={icon} size={24} color={colors.headerTint} />
    </Button>
  );
};

NavHeaderButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

NavHeaderButton.defaultProps = {
  style: null,
};

export default NavHeaderButton;
