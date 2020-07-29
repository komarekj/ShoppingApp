import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  containerError: {
    backgroundColor: colors.warning,
  },
  containerSuccess: {
    backgroundColor: colors.primary,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  icon: {
    color: 'white',
    marginRight: 6,
  },
  label: {
    fontSize: 13,
    color: 'white',
  },
});

export default styles;
