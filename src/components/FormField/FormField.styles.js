import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  fieldWrap: {
    marginLeft: 0,
  },
  fieldWrapError: {
    borderBottomColor: colors.warning,
  },
  field: {
    fontSize: 14,
  },
  label: {
    fontSize: 13,
  },
  labelError: {
    color: colors.warning,
  },
});

export default styles;
