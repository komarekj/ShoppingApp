import { StyleSheet, Dimensions } from 'react-native';
import variables from '~/themes/nativeBase/variables/platform';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -variables.padding,
  },
  innerWrap: {
    paddingHorizontal: variables.padding,
    paddingBottom: 10,
  },
  item: {
    width: Dimensions.get('window').width / 2.5,
  },
});

export default styles;
