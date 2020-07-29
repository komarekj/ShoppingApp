import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import styles from './TabIcon.styles';

const TabIcon = ({ size, color, iconName, count }) => {
  return (
    <View style={styles.wrap}>
      <Feather style={styles.icon} name={iconName} size={size} color={color} />
      {count > 0 && (
        <View style={styles.countWrap}>
          <Text style={styles.count}>{count}</Text>
        </View>
      )}
    </View>
  );
};

TabIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  count: PropTypes.number,
};

TabIcon.defaultProps = {
  count: null,
};

export default TabIcon;
