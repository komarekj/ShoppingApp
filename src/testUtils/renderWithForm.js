import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-native-testing-library';
import { FormProvider } from 'react-hook-form';
import mockForm from '~/testUtils/mockForm';
import { childrenType } from '~/types';

const FormWrapper = ({ children }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FormProvider {...mockForm}>{children}</FormProvider>
);

FormWrapper.propTypes = {
  children: childrenType.isRequired,
};

const renderWithForm = (component) => {
  return render(component, { wrapper: FormWrapper });
};

export default renderWithForm;
