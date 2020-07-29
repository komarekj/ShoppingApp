import React from 'react';
import renderWithForm from '~/testUtils/renderWithForm';
import CheckoutSectionShipping from './CheckoutSectionShipping';

jest.useFakeTimers();

describe('CheckoutSectionShipping screen component', () => {
  test('should render', async () => {
    renderWithForm(<CheckoutSectionShipping />);
  });
});
