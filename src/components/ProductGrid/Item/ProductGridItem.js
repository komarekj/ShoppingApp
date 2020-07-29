import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Image, Text } from 'react-native';
import { View, Card, CardItem, H3, Button } from 'native-base';
import { Feather, AntDesign } from '@expo/vector-icons';
import formatPrice from '~/helpers/formatPrice';

import styles from './ProductGridItem.styles';
import colors from '~/themes/colors';
import { productType } from '~/types';

const ProductGridItem = ({
  product,
  style,
  onPress,
  onWishlistPress,
  onAddToCartPress,
  isInWishlist,
}) => {
  const { title, image, price } = product;
  return (
    <Card style={[styles.container, style]}>
      <CardItem button style={styles.content} onPress={onPress}>
        <Image source={{ uri: image }} style={styles.image} />
        <H3 style={styles.title} testID="productTitle">
          {title}
        </H3>
        <Text style={styles.price}>{formatPrice(price)}</Text>
        <View style={styles.buttonWrap}>
          {onWishlistPress && (
            <Button
              style={styles.buttonWishlist}
              onPress={onWishlistPress}
              testID="addToWishlistBtn"
              bordered
            >
              {isInWishlist ? (
                <AntDesign name="heart" size={18} color={colors.primary} />
              ) : (
                <Feather name="heart" size={18} color={colors.primary} />
              )}
            </Button>
          )}
          {onAddToCartPress && (
            <Button
              style={styles.buttonCart}
              onPress={onAddToCartPress}
              testID="addToCartBtn"
            >
              <Feather
                name="shopping-cart"
                size={14}
                color={colors.primaryContrast}
                style={styles.buttonCartIcon}
              />
              <Text style={styles.buttonCartTitle}>Add To Cart</Text>
            </Button>
          )}
        </View>
      </CardItem>
    </Card>
  );
};

ProductGridItem.propTypes = {
  product: productType.isRequired,
  onPress: PropTypes.func.isRequired,
  onAddToCartPress: PropTypes.func,
  onWishlistPress: PropTypes.func,
  isInWishlist: PropTypes.bool,
  style: ViewPropTypes.style,
};

ProductGridItem.defaultProps = {
  style: null,
  onAddToCartPress: null,
  onWishlistPress: null,
  isInWishlist: false,
};

export default ProductGridItem;
