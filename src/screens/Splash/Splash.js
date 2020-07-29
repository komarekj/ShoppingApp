import React from 'react';
import { Image } from 'react-native';
import { View } from 'native-base';
import splashImage from '~/assets/splash.png';

import styles from './Splash.styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={splashImage} style={styles.image} />
    </View>
  );
};

export default Splash;
