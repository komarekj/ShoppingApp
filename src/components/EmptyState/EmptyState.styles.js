import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  cardItem: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  content: {
    fontWeight: '300',
    fontSize: 14,
    color: colors.secondary,
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
