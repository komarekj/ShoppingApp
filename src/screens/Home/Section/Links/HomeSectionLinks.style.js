import { StyleSheet } from 'react-native';
import variables from '~/themes/nativeBase/variables/platform';

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  title: {
    flex: 1,
    fontSize: 14,
  },
  image: {
    marginRight: 15,
    borderRadius: variables.cardBorderRadius,
  },
});

export default styles;
