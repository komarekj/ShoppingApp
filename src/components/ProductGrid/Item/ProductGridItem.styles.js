import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  content: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 13,
    fontWeight: '300',
  },
  buttonWrap: {
    flexDirection: 'row',
    marginTop: 15,
    flexWrap: 'wrap',
  },
  buttonWishlist: {
    marginRight: 5,
    paddingHorizontal: 5,
  },
  buttonCart: {
    paddingHorizontal: 5,
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonCartIcon: {
    marginRight: 6,
  },
  buttonCartTitle: {
    color: colors.primaryContrast,
    fontSize: 13,
  },
});

export default styles;
