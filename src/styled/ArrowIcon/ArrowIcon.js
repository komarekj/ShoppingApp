import React from 'react';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import colors from '~/themes/colors';

const ArrowIcon = ({ color }) => {
  return <Feather name="chevron-right" size={14} color={color} />;
};

ArrowIcon.propTypes = {
  color: PropTypes.string,
};

ArrowIcon.defaultProps = {
  color: colors.subtle,
};

export default ArrowIcon;
