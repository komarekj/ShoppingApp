import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  itemContentWrap: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: '300',
  },
  qty: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  removeButton: {
    justifyContent: 'flex-end',
    width: 40,
  },
});

export default styles;
