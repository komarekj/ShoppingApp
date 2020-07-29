import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentInner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  loginCardItem: {
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
  },
  itemContentWrap: {
    flex: 1,
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonTitle: {
    textAlign: 'center',
    flex: 1,
  },
  loginWrap: {
    marginBottom: 30,
  },
  registerCardItem: {
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30,
  },
  registerTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  registerButton: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  registerButtonTitle: {
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
