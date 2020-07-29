import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
    marginBottom: -8,
  },
  countWrap: {
    position: 'absolute',
    top: -3,
    right: -10,
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 17,
    height: 17,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#fff',
    fontSize: 11,
  },
});

export default styles;
