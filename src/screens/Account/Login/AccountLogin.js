import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Container,
  Content,
  Card,
  CardItem,
  H2,
  Form,
  Button,
  Text,
  View,
} from 'native-base';
import { fetchLogin } from '~/redux/account';
import FormField from '~/components/FormField';
import ButtonLoader from '~/components/ButtonLoader';
import NotificationCard from '~/components/NotificationCard';
import LoadingStatus from '~/constants/LoadingStatus';
import screens from '~/constants/screens';
import styles from './AccountLogin.styles';

const AccountLogin = () => {
  const status = useSelector((state) => state.account.loginStatus);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { handleSubmit, ...formMethods } = useForm();

  const handleFormSubmit = ({ email, password }) => {
    dispatch(fetchLogin({ email, password }));
  };

  const handleRegisterPress = () => {
    navigation.navigate(screens.AccountRegister);
  };

  return (
    <Container>
      <Content
        padder
        scrollEnabled={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.contentInner}>
          <View style={styles.loginContainer}>
            <H2 style={styles.title}>Login</H2>
            <NotificationCard
              message="Login failed. Please try again"
              isVisible={status === LoadingStatus.ERROR}
              isError
            />
            <Card style={styles.loginCard}>
              <CardItem style={styles.loginCardItem}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <FormProvider {...formMethods}>
                  <Form style={{ flex: 1 }}>
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
                      label="Login"
                      onPress={handleSubmit(handleFormSubmit)}
                      isLoading={status === LoadingStatus.LOADING}
                      style={styles.loginButton}
                      titleStyle={styles.loginButtonTitle}
                    />
                  </Form>
                </FormProvider>
              </CardItem>
            </Card>
          </View>
          <View style={styles.registerWrap}>
            <Text style={styles.registerTitle}>Dont have an account?</Text>
            <Button onPress={handleRegisterPress} style={styles.registerButton}>
              <Text style={styles.registerButtonTitle}>Create New Account</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default AccountLogin;
