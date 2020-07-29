import React from 'react';
import { render } from 'react-native-testing-library';
import screens from '~/constants/screens';
import HomeSectionCategory from '~/constants/HomeSectionCategory';
import Home from './Home';

describe('Home screen', () => {
  test('should render', () => {
    const sections = [
      {
        id: 'testSectionId',
        category: HomeSectionCategory.BANNER,
        settings: {
          image: 'https://testimage',
          link: { screen: screens.Product, id: 'testId' },
          aspectRatio: 1,
        },
      },
    ];

    render(<Home sections={sections} />);
  });
});
