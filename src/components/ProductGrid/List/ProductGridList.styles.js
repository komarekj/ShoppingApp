import { StyleSheet } from 'react-native';
import variables from '~/themes/nativeBase/variables/platform';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: variables.contentPadding,
  },
  item: {
    flex: 1,
    maxWidth: '50%',
  },
});

export default styles;
