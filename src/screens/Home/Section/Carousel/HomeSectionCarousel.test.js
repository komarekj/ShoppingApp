import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { render, fireEvent } from 'react-native-testing-library';
import HomeSectionCarousel from './HomeSectionCarousel';

describe('HomeSectionCarousel screen component', () => {
  jest.useFakeTimers();

  test('should render and trigger press handler', () => {
    const settings = {
      items: [
        {
          image: 'https://testimage',
          link: { screen: 'Shop', id: 'testId' },
        },
      ],
      aspectRatio: 1,
    };

    const { getByTestId } = render(<HomeSectionCarousel settings={settings} />);

    const slideImage = getByTestId('bannerImage');
    fireEvent.press(slideImage);
    const navigation = useNavigation();
    expect(navigation.push).toHaveBeenCalledTimes(1);
  });
});
