import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { Container, Content, H2, Card, CardItem, Form } from 'native-base';
import { fetchRegister } from '~/redux/account';
import FormField from '~/components/FormField';
import ButtonLoader from '~/components/ButtonLoader';
import NotificationCard from '~/components/NotificationCard';
import LoadingStatus from '~/constants/LoadingStatus';
import styles from './AccountRegistration.styles';

const AccountRegistration = () => {
  const status = useSelector((state) => state.account.registerStatus);

  const dispatch = useDispatch();
  const { handleSubmit, ...formMethods } = useForm();

  const handleFormSubmit = (formData) => {
    dispatch(fetchRegister({ formData }));
  };

  return (
    <Container>
      <Content padder>
        <H2 style={styles.title}>Register</H2>
        <NotificationCard
          message="Registration failed. Please try again"
          isVisible={status === LoadingStatus.ERROR}
          isError
        />
        <Card>
          <CardItem style={styles.cardItem}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <FormProvider {...formMethods}>
              <Form style={{ flex: 1 }}>
                <FormField label="First Name" id="firstName" required />
                <FormField label="Last Name" id="lastName" required />
                <FormField
                  label="Email"
                  id="email"
                  keyboardType="email-address"
                  required
                />
                <FormField
                  label="Password"
                  id="password"
                  required
                  secureTextEntry
                />
                <ButtonLoader
                  label="Register"
                  onPress={handleSubmit(handleFormSubmit)}
                  isLoading={status === LoadingStatus.LOADING}
                  style={styles.button}
                  titleStyle={styles.buttonTitle}
                />
              </Form>
            </FormProvider>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default AccountRegistration;
