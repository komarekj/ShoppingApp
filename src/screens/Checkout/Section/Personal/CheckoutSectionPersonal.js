import React from 'react';
import CheckoutSection from '../CheckoutSection';
import FormField from '~/components/FormField';

const CheckoutSectionPersonal = () => (
  <CheckoutSection title="Contact Details">
    <FormField label="First Name" id="contactFirstName" required />
    <FormField label="Last Name" id="contactLastName" required />
    <FormField
      label="Your Email"
      id="contactEmail"
      keyboardType="email-address"
      required
    />
  </CheckoutSection>
);

export default CheckoutSectionPersonal;
