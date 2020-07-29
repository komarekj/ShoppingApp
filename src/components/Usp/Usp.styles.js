import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  icon: {
    marginRight: 15,
    color: colors.primary,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    fontWeight: '300',
  },
});

export default styles;
