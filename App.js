import React from 'react';
import { YellowBox } from 'react-native';
import { decode, encode } from 'base-64';
import 'intl';
import 'intl/locale-data/jsonp/en';
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
import { AppRoot } from '~/components/App';

/**
 * Sentry
 */
Sentry.init({
  dsn:
    'https://870ff90ed262469db5eb61e2278fa20a@o183938.ingest.sentry.io/5360183',
  enableInExpoDevelopment: false,
});
Sentry.setRelease(Constants.manifest.revisionId);

/**
 * Fix Firebase Android warnings
 */
YellowBox.ignoreWarnings(['Setting a timer']);

/**
 * Firebase bug fix
 */
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const App = () => {
  return <AppRoot />;
};

export default App;
