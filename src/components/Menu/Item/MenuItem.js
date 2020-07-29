import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'native-base';
import ArrowIcon from '~/styled/ArrowIcon';
import styles from './MenuItem.styles';
import colors from '~/themes/colors';

const MenuItem = ({ title, onPress, isOpen, isSubitem, hasSubitems }) => {
  const buttonStyles = [styles.button, isOpen ? styles.buttonOpen : null];

  const labelStyles = [
    styles.label,
    isOpen ? styles.buttonOpenLabel : null,
    isSubitem ? styles.buttonSubitemLabel : null,
  ];

  const iconWrapStyles = [
    hasSubitems && !isOpen ? { transform: [{ rotate: '90deg' }] } : null,
  ];

  return (
    <Button transparent onPress={onPress} style={buttonStyles}>
      <Text style={labelStyles}>{title}</Text>
      <View style={iconWrapStyles}>
        <ArrowIcon color={isOpen ? colors.primaryContrast : colors.subtle} />
      </View>
    </Button>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSubitem: PropTypes.bool,
  hasSubitems: PropTypes.bool,
};

MenuItem.defaultProps = {
  isSubitem: false,
  hasSubitems: false,
};

export default MenuItem;
