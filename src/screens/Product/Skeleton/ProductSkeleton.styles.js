import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.loader,
    height: 250,
    marginBottom: 10,
  },
  title: {
    backgroundColor: colors.loader,
    height: 50,
    width: '60%',
    marginBottom: 10,
  },
  price: {
    backgroundColor: colors.loader,
    height: 30,
    width: '30%',
    marginBottom: 30,
  },
  description: {
    marginBottom: 30,
  },
  descriptionItem: {
    backgroundColor: colors.loader,
    height: 15,
    marginBottom: 5,
  },
  qty: {
    backgroundColor: colors.loader,
    marginBottom: 10,
    height: 40,
  },
  addToCart: {
    backgroundColor: colors.loader,
    marginBottom: 20,
    height: 60,
  },
});

export default styles;
