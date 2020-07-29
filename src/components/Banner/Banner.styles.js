import { StyleSheet } from 'react-native';
import variables from '~/themes/nativeBase/variables/platform';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: variables.cardBorderRadius,
  },
});

export default styles;
