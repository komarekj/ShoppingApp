import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  buttonCart: {
    justifyContent: 'center',
    height: 50,
    marginBottom: 5,
  },
  buttonWishlist: {
    justifyContent: 'center',
    borderColor: colors.secondary,
    height: 50,
  },
  buttonWishlistTitle: {
    color: colors.secondary,
  },
});

export default styles;
