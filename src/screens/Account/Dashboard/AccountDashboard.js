import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container, Content, H3 } from 'native-base';
import { fetchLogout } from '~/redux/account';
import { orderType } from '~/types';
import AccountDashboardOrders from './Orders';
import AccountDashboardLogout from './Logout';
import styles from './AccountDashboard.styles';

const AccountDashboard = ({ orders }) => {
  const dispatch = useDispatch();

  const handleLogoutPress = () => {
    dispatch(fetchLogout());
  };

  return (
    <Container>
      <Content padder>
        <H3 style={styles.title}>Your Orders</H3>
        <AccountDashboardOrders orders={orders} />
        <AccountDashboardLogout onPress={handleLogoutPress} />
      </Content>
    </Container>
  );
};

AccountDashboard.propTypes = {
  orders: PropTypes.arrayOf(orderType).isRequired,
};

export default AccountDashboard;
