import React from 'react';
import renderWithStore from '~/testUtils/renderWithStore';
import HomeContainer from './HomeContainer';

describe('Home screen container', () => {
  test('should render', () => {
    const state = {
      config: {
        status: null,
        homepage: {},
      },
    };

    renderWithStore(<HomeContainer />, state);
  });
});
