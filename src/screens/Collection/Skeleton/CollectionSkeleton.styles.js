import { StyleSheet } from 'react-native';
import colors from '~/themes/colors';

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.loader,
    height: 50,
    width: '60%',
    marginBottom: 30,
  },
  description: {
    marginBottom: 30,
  },
  descriptionItem: {
    backgroundColor: colors.loader,
    height: 15,
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
