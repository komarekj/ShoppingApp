import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, H3 } from 'native-base';
import { useForm, FormProvider } from 'react-hook-form';
import NotificationCard from '~/components/NotificationCard';
import { fetchNewOrder, setCheckoutStatus } from '~/redux/checkout';
import LoadingStatus from '~/constants/LoadingStatus';
import screens from '~/constants/screens';
import {
  CheckoutSectionPersonal,
  CheckoutSectionBilling,
  CheckoutSectionShipping,
  CheckoutSectionPayment,
} from './Section';
import CheckoutButton from './Button';
import styles from './Checkout.styles';

const Checkout = () => {
  const status = useSelector((state) => state.checkout.status);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { handleSubmit, ...formMethods } = useForm();

  const handleFormSubmit = (formData) => {
    dispatch(fetchNewOrder({ formData }));
  };

  useEffect(() => {
    if (status === LoadingStatus.FINISHED) {
      navigation.navigate(screens.Tabs, {
        screen: screens.Shop,
      });
      dispatch(setCheckoutStatus({ status: null }));
    }
  }, [status]);

  return (
    <Container>
      <Content padder>
        <H3 style={styles.title}>Checkout</H3>
        <NotificationCard
          message="Oops! Something went wrong. Please try again"
          isVisible={status === LoadingStatus.ERROR}
          isError
        />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...formMethods}>
          <CheckoutSectionPersonal />
          <CheckoutSectionBilling />
          <CheckoutSectionShipping />
          <CheckoutSectionPayment />
          <CheckoutButton
            onPress={handleSubmit(handleFormSubmit)}
            isLoading={status === LoadingStatus.LOADING}
          />
        </FormProvider>
      </Content>
    </Container>
  );
};

export default Checkout;
