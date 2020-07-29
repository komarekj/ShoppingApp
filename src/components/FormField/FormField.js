import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { Input, Item } from 'native-base';
import styles from './FormField.styles';

const FormField = ({ label, id, required, ...otherProps }) => {
  const { register, setValue, watch, errors } = useFormContext();

  useEffect(() => {
    register({ name: id }, { required });
  }, []);

  return (
    <Item style={[styles.fieldWrap, errors[id] ? styles.fieldWrapError : null]}>
      <Input
        placeholder={label}
        value={watch(id)}
        onChangeText={(text) => setValue(id, text)}
        style={styles.field}
        testID="formField"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </Item>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

FormField.defaultProps = {
  required: false,
};

export default FormField;
