import React from 'react';
import colors from '~/themes/colors';
import NavHeaderLogo from '~/styled/NavHeaderLogo';

export const headerBackground = {
  headerTintColor: colors.headerTint,
  headerStyle: {
    backgroundColor: colors.header,
  },
};

export const hiddenBackTitle = {
  headerBackTitleVisible: false,
};

export const basicHeaderStyling = {
  ...headerBackground,
  ...hiddenBackTitle,
};

export const commonHeaderOptions = {
  ...headerBackground,
  ...hiddenBackTitle,
  headerTitle: () => <NavHeaderLogo />,
};
