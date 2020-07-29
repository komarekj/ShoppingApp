import React from 'react';
import CheckoutSection from '../CheckoutSection';
import FormField from '~/components/FormField';

const CheckoutSectionBilling = () => (
  <CheckoutSection title="Billing Details" required>
    <FormField label="Address" id="billingAddress" required />
    <FormField label="Apartment #, etc." id="billingAddress2" required />
    <FormField label="City" id="billingCity" required />
    <FormField label="Post Code" id="billingPostCode" required />
    <FormField label="Country" id="billingCountry" required />
  </CheckoutSection>
);

export default CheckoutSectionBilling;
