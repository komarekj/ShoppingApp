import React from 'react';
import { CheckBox, Text, View } from 'native-base';
import CheckoutSection from '../CheckoutSection';
import styles from './CheckoutSectionPayment.styles';

const CheckoutSectionPayment = () => (
  <CheckoutSection title="Payment">
    <View style={styles.wrap}>
      <CheckBox checked />
      <Text style={styles.label}>Cash On Delivery</Text>
    </View>
  </CheckoutSection>
);

export default CheckoutSectionPayment;
