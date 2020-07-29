import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import QtySelector from '~/components/QtySelector/QtySelector';
import styles from './ProductAddToCart.styles';
import colors from '~/themes/colors';

const ProductAddToCart = ({ onPress, onWishlistPress, isInWishlist }) => {
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <QtySelector qty={qty} onQtyChange={setQty} />
      <Button
        style={styles.buttonCart}
        onPress={() => onPress(qty)}
        testID="addToCartBtn"
      >
        <Feather
          name="shopping-cart"
          size={18}
          color={colors.primaryContrast}
        />
        <Text>Add To Cart</Text>
      </Button>
      <Button
        style={styles.buttonWishlist}
        onPress={onWishlistPress}
        testID="addToWishlistBtn"
        bordered
        dark
      >
        <Feather name="heart" size={18} color={colors.secondary} />
        {isInWishlist ? (
          <Text style={styles.buttonWishlistTitle}>In Your Wishlist</Text>
        ) : (
          <Text style={styles.buttonWishlistTitle}>Add To Wishlist</Text>
        )}
      </Button>
    </View>
  );
};

ProductAddToCart.propTypes = {
  onPress: PropTypes.func.isRequired,
  onWishlistPress: PropTypes.func.isRequired,
  isInWishlist: PropTypes.bool.isRequired,
};

export default ProductAddToCart;
