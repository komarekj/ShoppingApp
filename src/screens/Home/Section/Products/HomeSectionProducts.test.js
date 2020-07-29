import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fireEvent } from 'react-native-testing-library';
import renderWithStore from '~/testUtils/renderWithStore';
import HomeSectionProducts from './HomeSectionProducts';

describe('HomeSectionProducts screen component', () => {
  test('should render and trigger press handlers', () => {
    const settings = {
      title: 'testTitle',
      products: [
        {
          id: 'testId',
          title: 'testProduct',
          image: 'http://imageurl',
          price: 123.45,
          summary: 'testSummary',
          description: 'testDescription',
        },
      ],
    };

    const { getByTestId } = renderWithStore(
      <HomeSectionProducts settings={settings} />,
      {}
    );

    const productTitle = getByTestId('productTitle');
    fireEvent.press(productTitle);
    const navigation = useNavigation();
    expect(navigation.push).toHaveBeenCalledTimes(1);
  });
});
