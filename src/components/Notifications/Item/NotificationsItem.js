import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { Card, CardItem, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { notificationType } from '~/types';
import styles from './NotificationsItem.styles';

const NotificationsItem = ({ item, onClose }) => {
  const { message, isError } = item;

  const timer = useRef();
  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    timer.current = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 300,
    }).start();
  }, [fadeInAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeInAnim,
      }}
    >
      <Card style={styles.card}>
        <CardItem
          style={isError ? styles.containerError : styles.containerSuccess}
          onPress={onClose}
          button
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
    </Animated.View>
  );
};

NotificationsItem.propTypes = {
  item: notificationType.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationsItem;
