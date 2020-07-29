import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'native-base';
import { deleteNotification } from '~/redux/notifications';
import NotificationItem from './Item';
import styles from './Notifications.styles';

const Notifications = () => {
  const items = useSelector((state) => state.notifications.items);

  const dispatch = useDispatch();

  const handleNotificationClose = (itemId) => {
    dispatch(deleteNotification({ id: itemId }));
  };

  if (!items.length) return null;

  return (
    <View style={styles.container}>
      {items.slice(0, 3).map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
          onClose={() => handleNotificationClose(item.id)}
        />
      ))}
    </View>
  );
};

export default Notifications;
