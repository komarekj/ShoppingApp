import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  containerError: {
    backgroundColor: colors.warning,
  },
  containerSuccess: {
    backgroundColor: colors.success,
  },
  card: {
    marginBottom: 0,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  icon: {
    color: 'white',
    marginRight: 6,
  },
  label: {
    fontSize: 15,
    color: 'white',
  },
});

export default styles;
