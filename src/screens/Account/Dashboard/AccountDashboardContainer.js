import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import withLoader from '~/components/withLoader';
import { fetchAccountDashboard } from '~/redux/account';
import AccountDashboard from './AccountDashboard';
import AccountSkeleton from './Skeleton';
import AccountError from './Error';

const AccountDashboardWithLoader = withLoader(
  AccountDashboard,
  AccountSkeleton,
  AccountError
);

const AccountDashboardContainer = () => {
  const status = useSelector((state) => state.account.dashboardStatus);
  const orders = useSelector((state) => state.account.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
      dispatch(fetchAccountDashboard());
    }
  }, [status, dispatch]);

  return <AccountDashboardWithLoader status={status} orders={orders} />;
};

export default AccountDashboardContainer;
