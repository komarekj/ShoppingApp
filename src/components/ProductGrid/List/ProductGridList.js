import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import { productType, childrenType, wishlistType } from '~/types';
import ProductGridItem from '../Item';
import styles from './ProductGridList.styles';

const ProductGridList = ({
  products,
  header,
  wishlist,
  onProductPress,
  onWishlistPress,
  onAddToCartPress,
}) => {
  return (
    <Container>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductGridItem
            key={item.id}
            product={item}
            style={styles.item}
            onPress={() => onProductPress(item.id)}
            onAddToCartPress={
              onAddToCartPress ? () => onAddToCartPress(item.id) : null
            }
            onWishlistPress={
              onWishlistPress ? () => onWishlistPress(item.id) : null
            }
            isInWishlist={wishlist ? wishlist.includes(item.id) : null}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={header}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </Container>
  );
};

ProductGridList.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  header: childrenType,
  wishlist: wishlistType,
  onProductPress: PropTypes.func.isRequired,
  onWishlistPress: PropTypes.func,
  onAddToCartPress: PropTypes.func,
};

ProductGridList.defaultProps = {
  header: null,
  wishlist: null,
  onWishlistPress: null,
  onAddToCartPress: null,
};

export default ProductGridList;
