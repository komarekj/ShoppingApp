import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavTabs from './NavTabs';
import NavCheckout from './NavCheckout';
import screens from '~/constants/screens';

const Stack = createStackNavigator();

const NavRoot = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={screens.Tabs}
    >
      <Stack.Screen name={screens.Tabs} component={NavTabs} />
      <Stack.Screen name={screens.Checkout} component={NavCheckout} />
    </Stack.Navigator>
  );
};

export default NavRoot;
