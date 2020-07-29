import React from 'react';
import { render } from 'react-native-testing-library';
import HomeSection from './HomeSection';

jest.useFakeTimers();

describe('HomeSection screen component', () => {
  test('should render', () => {
    const sectionCategory = 'links';
    const settings = {
      title: 'testTitle',
      items: [
        {
          title: 'testLink',
          image: 'https://testimage',
          link: { screen: 'Shop', id: 'testId' },
        },
      ],
    };

    render(
      <HomeSection sectionCategory={sectionCategory} settings={settings} />
    );
  });
});
