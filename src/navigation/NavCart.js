import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartContainer } from '~/screens/Cart';
import { basicHeaderStyling } from '~/themes/reactNavigator/screenOptions';
import screens from '~/constants/screens';

const Stack = createStackNavigator();

const NavCart = () => {
  const screenOptions = {
    ...basicHeaderStyling,
    title: 'Shopping Cart',
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={screens.Cart} component={CartContainer} />
    </Stack.Navigator>
  );
};

export default NavCart;
