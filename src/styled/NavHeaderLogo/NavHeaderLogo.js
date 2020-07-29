import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import styles from './NavHeaderLogo.styles';
import logoImg from '~/assets/logo.png';

const NavHeaderLogo = ({ onPress }) => {
  const logo = (
    <Image style={styles.logo} source={logoImg} testID="headerLogo" />
  );

  if (!onPress) return logo;

  return <TouchableOpacity onPress={onPress}>{logo}</TouchableOpacity>;
};

NavHeaderLogo.propTypes = {
  onPress: PropTypes.func,
};

NavHeaderLogo.defaultProps = {
  onPress: null,
};

export default NavHeaderLogo;
