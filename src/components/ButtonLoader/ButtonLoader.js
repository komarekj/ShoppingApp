import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Button, Text, Spinner } from 'native-base';
import colors from '~/themes/colors';
import styles from './ButtonLoader.styles';

const ButtonLoader = ({ label, onPress, isLoading, style, titleStyle }) => {
  return (
    <Button
      onPress={onPress}
      style={[styles.button, style]}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner
          testID="buttonSpinner"
          size={40}
          color={colors.primaryContrast}
        />
      ) : (
        <Text style={titleStyle}>{label}</Text>
      )}
    </Button>
  );
};

ButtonLoader.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  titleStyle: ViewPropTypes.style,
};

ButtonLoader.defaultProps = {
  style: null,
  titleStyle: null,
};

export default ButtonLoader;
