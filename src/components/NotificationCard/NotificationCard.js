import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import styles from './NotificationCard.styles';

const NotificationCard = ({ message, isVisible, isError }) => {
  if (!isVisible) return null;

  return (
    <Card>
      <CardItem
        style={isError ? styles.containerError : styles.containerSuccess}
        testID={isError ? 'errorMessage' : 'successMessage'}
        cardBody
      >
        <View style={styles.wrap}>
          {isError ? (
            <AntDesign name="warning" style={styles.icon} size={20} />
          ) : (
            <AntDesign name="check" style={styles.icon} size={20} />
          )}
          <Text style={styles.label}>{message}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

NotificationCard.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
};

NotificationCard.defaultProps = {
  isError: false,
};

export default NotificationCard;
