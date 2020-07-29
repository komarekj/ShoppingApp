import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AccountDashboardContainer,
  AccountLogin,
  AccountRegister,
} from '~/screens/Account';
import { basicHeaderStyling } from '~/themes/reactNavigator/screenOptions';
import screens from '~/constants/screens';

const Stack = createStackNavigator();

const NavAccount = () => {
  const isAuth = useSelector((state) => state.account.isAuth);

  const screenOptions = {
    ...basicHeaderStyling,
    title: 'Account',
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {isAuth ? (
        <Stack.Screen
          name={screens.AccountDashboard}
          component={AccountDashboardContainer}
        />
      ) : (
        <>
          <Stack.Screen name={screens.AccountLogin} component={AccountLogin} />
          <Stack.Screen
            name={screens.AccountRegister}
            component={AccountRegister}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NavAccount;
