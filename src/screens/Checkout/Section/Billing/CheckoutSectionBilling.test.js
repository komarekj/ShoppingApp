import React from 'react';
import renderWithForm from '~/testUtils/renderWithForm';
import CheckoutSectionBilling from './CheckoutSectionBilling';

describe('CheckoutSectionBilling screen component', () => {
  test('should render', async () => {
    renderWithForm(<CheckoutSectionBilling />);
  });
});
