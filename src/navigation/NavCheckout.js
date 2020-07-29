import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '~/screens/Checkout/Checkout';
import { commonHeaderOptions } from '~/themes/reactNavigator/screenOptions';
import screens from '~/constants/screens';

const Stack = createStackNavigator();

const NavCheckout = () => {
  const screenOptions = {
    ...commonHeaderOptions,
    headerRight: null,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={screens.Checkout} component={Checkout} />
    </Stack.Navigator>
  );
};

export default NavCheckout;
