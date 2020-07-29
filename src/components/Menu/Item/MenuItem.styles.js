import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  button: {},
  label: {
    fontSize: 15,
    color: colors.text,
  },
  buttonOpen: {
    backgroundColor: colors.primary,
  },
  buttonOpenLabel: {
    color: colors.primaryContrast,
  },
  buttonSubitemLabel: {
    fontSize: 13,
  },
});

export default styles;
