import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 40,
  },
  item: {
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 4,
  },
  content: {
    textAlign: 'center',
    fontSize: 12,
  },
});

export default styles;
