import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Banner from './Banner';

describe('Banner component', () => {
  const image = 'https://imageurl';
  const onPress = jest.fn();
  const aspectRatio = 1;

  test('should render and trigger press handler', () => {
    const showPressEffect = true;

    const { getByTestId } = render(
      <Banner
        image={image}
        onPress={onPress}
        aspectRatio={aspectRatio}
        showPressEffect={showPressEffect}
      />
    );

    const bannerImage = getByTestId('bannerImage');
    fireEvent.press(bannerImage);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should render without press effect', () => {
    const showPressEffect = false;

    render(
      <Banner
        image={image}
        onPress={onPress}
        aspectRatio={aspectRatio}
        showPressEffect={showPressEffect}
      />
    );
  });
});
