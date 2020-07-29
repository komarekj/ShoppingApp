import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { productType } from '~/types';
import ProductGridItem from '../Item';
import SideScroller from '~/components/SideScroller';
import styles from './ProductGridSlider.styles';

const ProductGridSlider = ({ products, onProductPress, onAddToCartPress }) => {
  return (
    <View style={styles.container}>
      <SideScroller innerWrapStyle={styles.innerWrap}>
        {products.map((product) => (
          <ProductGridItem
            key={product.id}
            product={product}
            onPress={() => onProductPress(product.id)}
            onAddToCartPress={
              onAddToCartPress ? () => onAddToCartPress(product.id) : null
            }
            style={styles.item}
          />
        ))}
      </SideScroller>
    </View>
  );
};

ProductGridSlider.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  onProductPress: PropTypes.func.isRequired,
  onAddToCartPress: PropTypes.func,
};

ProductGridSlider.defaultProps = {
  onAddToCartPress: null,
};

export default ProductGridSlider;
