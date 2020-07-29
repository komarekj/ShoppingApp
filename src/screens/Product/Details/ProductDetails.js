import React from 'react';
import PropTypes from 'prop-types';
import { View, H1, Text } from 'native-base';
import formatPrice from '~/helpers/formatPrice';
import styles from './ProductDetails.styles';

const ProductDetails = ({ title, summary, price }) => {
  return (
    <View style={styles.container}>
      <H1 style={styles.title}>{title}</H1>
      <Text style={styles.price}>{formatPrice(price)}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  );
};

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetails;
