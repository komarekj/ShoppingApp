import { DefaultTheme } from '@react-navigation/native';
import colors from '~/themes/colors';

const NavigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    text: colors.text,
  },
};

export default NavigatorTheme;
