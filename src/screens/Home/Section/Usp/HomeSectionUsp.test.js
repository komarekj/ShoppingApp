import React from 'react';
import { render } from 'react-native-testing-library';
import HomeSectionUsp from './HomeSectionUsp';

describe('HomeSectionUsp screen component', () => {
  test('should render', () => {
    const settings = {
      items: [
        {
          icon: 'x',
          title: 'testUsp',
          content: 'testContent',
        },
      ],
    };

    render(<HomeSectionUsp settings={settings} />);
  });
});
