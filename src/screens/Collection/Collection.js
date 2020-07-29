import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ProductGridList } from '~/components/ProductGrid';
import { toggleWishlist } from '~/redux/wishlist';
import { addNotification } from '~/redux/notifications';
import { addToCart } from '~/redux/cart';
import screens from '~/constants/screens';
import { collectionType, productType, wishlistType } from '~/types';
import CollectionHeader from './Header';

const Collection = ({ collection, products, wishlist }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleProductPress = (productId) => {
    navigation.push(screens.Product, { id: productId });
  };

  const handleAddToCartPress = (productId) => {
    dispatch(addToCart({ productId }));
    dispatch(addNotification({ message: 'Added To Cart' }));
  };

  const handleWishlistPress = (productId) => {
    dispatch(toggleWishlist({ productId }));
  };

  return (
    <ProductGridList
      products={products}
      onProductPress={handleProductPress}
      onWishlistPress={handleWishlistPress}
      onAddToCartPress={handleAddToCartPress}
      header={<CollectionHeader collection={collection} />}
      wishlist={wishlist}
    />
  );
};

Collection.propTypes = {
  collection: collectionType.isRequired,
  products: PropTypes.arrayOf(productType).isRequired,
  wishlist: wishlistType.isRequired,
};

export default Collection;
