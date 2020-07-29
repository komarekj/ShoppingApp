import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { render, fireEvent } from 'react-native-testing-library';
import HomeSectionLinks from './HomeSectionLinks';

jest.useFakeTimers();

describe('HomeSectionLinks screen component', () => {
  test('should render and trigger press handler', () => {
    const settings = {
      items: [
        {
          title: 'testLink1',
          image: 'https://testimage',
          link: { screen: 'Shop', id: 'testId1' },
        },
        {
          title: 'testLink2',
          image: 'https://testimage',
          link: { screen: 'Shop', id: 'testId2' },
        },
      ],
    };

    const { getAllByTestId } = render(<HomeSectionLinks settings={settings} />);

    const linkTitles = getAllByTestId('linkTitle');
    fireEvent.press(linkTitles[0]);
    const navigation = useNavigation();
    expect(navigation.push).toHaveBeenCalledTimes(1);
  });
});
