import React from 'react';
import PropTypes from 'prop-types';
import { View, Card, CardItem, Text } from 'native-base';
import EmptyState from '~/components/EmptyState';
import LineDivider from '~/styled/LineDivider';
import formatPrice from '~/helpers/formatPrice';
import formatDate from '~/helpers/formatDate';
import { orderType } from '~/types';
import styles from './AccountDashboardOrders.styles';

const AccountDashboardOrders = ({ orders }) => {
  if (!orders || !orders.length) {
    return (
      <View style={styles.container}>
        <EmptyState content="No Previous Orders" />
      </View>
    );
  }

  return (
    <Card style={styles.container}>
      {orders.map(({ id, created, total, status }, idx, list) => (
        <React.Fragment key={id}>
          <CardItem style={styles.order}>
            <Text style={styles.orderLabel}>{formatDate(created)}</Text>
            <Text style={styles.orderLabel}>{status}</Text>
            <Text style={[styles.orderLabel, styles.orderTotal]}>
              {formatPrice(total)}
            </Text>
          </CardItem>
          {idx < list.length && <LineDivider />}
        </React.Fragment>
      ))}
    </Card>
  );
};

AccountDashboardOrders.propTypes = {
  orders: PropTypes.arrayOf(orderType).isRequired,
};

export default AccountDashboardOrders;
