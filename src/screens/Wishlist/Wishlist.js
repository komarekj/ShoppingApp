import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ProductGridList } from '~/components/ProductGrid';
import EmptyState from '~/components/EmptyState';
import { toggleWishlist } from '~/redux/wishlist';
import { addToCart } from '~/redux/cart';
import { addNotification } from '~/redux/notifications';
import screens from '~/constants/screens';
import { productType, wishlistType } from '~/types';

const Wishlist = ({ products, wishlist }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleProductPress = (productId) => {
    navigation.navigate(screens.Shop, {
      screen: screens.Product,
      params: { id: productId },
    });
  };

  const handleAddToCartPress = (productId) => {
    dispatch(addToCart({ productId }));
    dispatch(addNotification({ message: 'Added To Cart' }));
  };

  const handleWishlistPress = (productId) => {
    dispatch(toggleWishlist({ productId }));
  };

  if (!products.length) {
    return (
      <Container>
        <Content padder>
          <EmptyState content="No Products In Your Wishlist" />
        </Content>
      </Container>
    );
  }

  return (
    <ProductGridList
      products={products}
      onProductPress={handleProductPress}
      onAddToCartPress={handleAddToCartPress}
      onWishlistPress={handleWishlistPress}
      wishlist={wishlist}
    />
  );
};

Wishlist.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  wishlist: PropTypes.arrayOf(wishlistType).isRequired,
};

export default Wishlist;
