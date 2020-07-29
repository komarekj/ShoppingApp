import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.loader,
    height: 150,
    marginBottom: 30,
  },
  uspList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  uspListItem: {
    alignItems: 'center',
    flex: 1,
  },
  uspListItemIcon: {
    backgroundColor: colors.loader,
    height: 50,
    width: 50,
    marginBottom: 5,
  },
  uspListItemTitle: {
    backgroundColor: colors.loader,
    height: 20,
    width: '80%',
  },
  links: {
    marginBottom: 30,
  },
  linksItem: {
    backgroundColor: colors.loader,
    height: 40,
    marginBottom: 5,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productListItem: {
    marginBottom: 10,
    backgroundColor: colors.loader,
    height: 150,
    width: '49%',
  },
});

export default styles;
