import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavHeaderLogo from '~/styled/NavHeaderLogo';
import { MenuContainer, MenuToggle } from '~/components/Menu';
import { HomeContainer } from '~/screens/Home';
import { CollectionContainer } from '~/screens/Collection';
import { ProductContainer } from '~/screens/Product';
import { commonHeaderOptions } from '~/themes/reactNavigator/screenOptions';
import screens from '~/constants/screens';

const Stack = createStackNavigator();

const NavShop = () => {
  const navigation = useNavigation();

  const handleLogoPress = () => {
    navigation.navigate(screens.Home);
  };

  const screenOptions = {
    ...commonHeaderOptions,
    headerRight: () => <MenuToggle />,
    headerTitle: () => <NavHeaderLogo onPress={handleLogoPress} />,
  };

  return (
    <MenuContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={screens.Home}
      >
        <Stack.Screen name={screens.Home} component={HomeContainer} />
        <Stack.Screen
          name={screens.Collection}
          component={CollectionContainer}
        />
        <Stack.Screen name={screens.Product} component={ProductContainer} />
      </Stack.Navigator>
    </MenuContainer>
  );
};

export default NavShop;
