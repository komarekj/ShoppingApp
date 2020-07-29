import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { StyleProvider } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import ErrorBoundary from '~/components/ErrorBoundary';
import Splash from '~/screens/Splash';
import NavRoot from '~/navigation/NavRoot';
import { store, persistor } from '~/redux/store';
import NavigatorTheme from '~/themes/reactNavigator/NavigatorTheme';
import getTheme from '~/themes/nativeBase/components';
import themeVariables from '~/themes/nativeBase/variables/platform';
import colors from '~/themes/colors';
import Notifications from '~/components/Notifications';
import AppContainer from '../Container';

const AppRoot = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        // eslint-disable-next-line global-require
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        // eslint-disable-next-line global-require
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
        ...Feather.font,
        ...AntDesign.font,
      });
      setIsReady(true);
    })();
  }, []);

  if (!isReady) {
    return <Splash />;
  }

  return (
    <StyleProvider style={getTheme(themeVariables)}>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={<Splash />} persistor={persistor}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.primary}
            />
            <NavigationContainer theme={NavigatorTheme}>
              <AppContainer>
                <NavRoot />
              </AppContainer>
            </NavigationContainer>
            <Notifications />
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </StyleProvider>
  );
};

export default AppRoot;
