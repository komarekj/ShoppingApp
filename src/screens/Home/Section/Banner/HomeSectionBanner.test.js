import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { render, fireEvent } from 'react-native-testing-library';
import screens from '~/constants/screens';
import HomeSectionBanner from './HomeSectionBanner';

describe('HomeSectionBanner screen component', () => {
  test('should render and trigger press handler', () => {
    const settings = {
      image: 'https://testimage',
      link: { screen: screens.Product, id: 'testId' },
      aspectRatio: 1,
    };

    const { getByTestId } = render(<HomeSectionBanner settings={settings} />);

    const navigation = useNavigation();
    const bannerImage = getByTestId('bannerImage');
    fireEvent.press(bannerImage);

    expect(navigation.push).toHaveBeenCalledWith(screens.Product, {
      id: 'testId',
    });
  });
});
