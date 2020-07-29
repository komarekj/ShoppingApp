import React from 'react';
import renderWithForm from '~/testUtils/renderWithForm';
import CheckoutSectionPersonal from './CheckoutSectionPersonal';

describe('CheckoutSectionPersonal screen component', () => {
  test('should render', async () => {
    renderWithForm(<CheckoutSectionPersonal />);
  });
});
