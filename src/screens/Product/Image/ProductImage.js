import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Card, CardItem } from 'native-base';
import styles from './ProductImage.styles';

const ProductImage = ({ image }) => {
  return (
    <Card style={styles.container}>
      <CardItem>
        <Image source={{ uri: image }} style={styles.image} />
      </CardItem>
    </Card>
  );
};

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductImage;
