import React from 'react';
import { fireEvent } from 'react-native-testing-library';
import renderWithForm from '~/testUtils/renderWithForm';
import mockForm from '~/testUtils/mockForm';
import FormField from './FormField';

describe('FormField component', () => {
  test('should render and register field', async () => {
    const label = 'testLabel';
    const id = 'testId';

    const { getByTestId } = renderWithForm(
      <FormField label={label} id={id} required />
    );

    expect(mockForm.register).toHaveBeenCalledWith(
      { name: id },
      { required: true }
    );

    const field = getByTestId('formField');
    fireEvent.changeText(field, 'testText');
    expect(mockForm.setValue(id, 'testText'));
  });
});
