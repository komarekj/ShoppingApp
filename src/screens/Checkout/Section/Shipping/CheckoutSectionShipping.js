import React from 'react';
import CheckoutSection from '../CheckoutSection';
import FormField from '~/components/FormField';

const CheckoutSectionShipping = () => (
  <CheckoutSection title="Shipping Details">
    <FormField label="Full Name" id="shippingName" required />
    <FormField label="Address" id="shippingAddress" required />
    <FormField label="Apartment, suite, etc." id="shippingAddress2" required />
    <FormField label="City" id="shippingCity" required />
    <FormField label="Post Code" id="shippingPostCode" required />
    <FormField label="Country" id="shippingCountry" required />
  </CheckoutSection>
);

export default CheckoutSectionShipping;
