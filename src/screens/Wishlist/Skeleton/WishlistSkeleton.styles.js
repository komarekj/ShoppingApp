import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.loader,
    height: 50,
    width: '60%',
    marginBottom: 30,
  },
  linksItem: {
    backgroundColor: colors.loader,
    height: 60,
    marginBottom: 5,
  },
});

export default styles;
