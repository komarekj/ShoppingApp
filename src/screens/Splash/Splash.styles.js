import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default styles;
