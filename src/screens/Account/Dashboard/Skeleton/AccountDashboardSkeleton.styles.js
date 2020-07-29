import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.loader,
    height: 50,
    width: '60%',
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.loader,
    marginBottom: 20,
    height: 40,
  },
  items: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: colors.loader,
    height: 60,
    marginBottom: 5,
  },
});

export default styles;
