import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '~/styled/TabIcon';
import screens from '~/constants/screens';
import { selectCartCount } from '~/redux/cart';
import { selectWishlistCount } from '~/redux/wishlist';
import NavShop from './NavShop';
import NavWishlist from './NavWishlist';
import NavCart from './NavCart';
import NavAccount from './NavAccount';

const Tabs = createBottomTabNavigator();

const iconMap = new Map([
  [screens.Shop, 'shopping-bag'],
  [screens.Wishlist, 'heart'],
  [screens.Account, 'user'],
  [screens.Cart, 'shopping-cart'],
]);

const TabNav = () => {
  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCount);

  const getCountForRoute = (routeName) => {
    switch (routeName) {
      case screens.Cart:
        return cartCount;
      case screens.Wishlist:
        return wishlistCount;
      default:
        return null;
    }
  };

  const getScreenOptions = ({ route }) => ({
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ color, size }) => (
      <TabIcon
        color={color}
        size={size}
        count={getCountForRoute(route.name)}
        iconName={iconMap.get(route.name)}
      />
    ),
  });

  return (
    <Tabs.Navigator screenOptions={getScreenOptions}>
      <Tabs.Screen name={screens.Shop} component={NavShop} />
      <Tabs.Screen name={screens.Account} component={NavAccount} />
      <Tabs.Screen name={screens.Wishlist} component={NavWishlist} />
      <Tabs.Screen name={screens.Cart} component={NavCart} />
    </Tabs.Navigator>
  );
};

export default TabNav;
