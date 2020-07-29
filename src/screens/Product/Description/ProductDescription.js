import React from 'react';
import PropTypes from 'prop-types';
import { View, Card, CardItem, Text } from 'native-base';
import styles from './ProductDescription.styles';

const ProductDescription = ({ content }) => {
  return (
    <Card style={styles.container}>
      <CardItem>
        <View>
          <Text style={styles.title}>Product Description</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

ProductDescription.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ProductDescription;
