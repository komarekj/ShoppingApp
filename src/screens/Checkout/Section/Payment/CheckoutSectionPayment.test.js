import React from 'react';
import renderWithForm from '~/testUtils/renderWithForm';
import CheckoutSectionPayment from './CheckoutSectionPayment';

describe('CheckoutSectionPayment screen component', () => {
  test('should render', async () => {
    renderWithForm(<CheckoutSectionPayment />);
  });
});
