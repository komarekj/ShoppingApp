import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WishlistContainer } from '~/screens/Wishlist';
import { basicHeaderStyling } from '~/themes/reactNavigator/screenOptions';
import screens from '~/constants/screens';

const Stack = createStackNavigator();

const NavWishlist = () => {
  const screenOptions = {
    ...basicHeaderStyling,
    title: 'Wishlist',
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={screens.Wishlist} component={WishlistContainer} />
    </Stack.Navigator>
  );
};

export default NavWishlist;
