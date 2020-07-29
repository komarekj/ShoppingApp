import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container, Content } from 'native-base';
import ProductImage from './Image';
import ProductDetails from './Details';
import ProductAddToCart from './AddToCart';
import ProductDescription from './Description';
import { addToCart } from '~/redux/cart';
import { toggleWishlist } from '~/redux/wishlist';
import { addNotification } from '~/redux/notifications';
import { productType } from '~/types';

const Product = ({ product, isInWishlist }) => {
  const dispatch = useDispatch();

  const handleAddToCartPress = (qty) => {
    dispatch(addToCart({ productId: product.id, qty }));
    dispatch(addNotification({ message: 'Added To Cart', isError: false }));
  };

  const handleWishlistPress = () => {
    dispatch(toggleWishlist({ productId: product.id }));
  };

  return (
    <Container>
      <Content padder>
        <ProductImage image={product.image} />
        <ProductDetails
          title={product.title}
          summary={product.summary}
          price={product.price}
        />
        <ProductAddToCart
          onPress={handleAddToCartPress}
          onWishlistPress={handleWishlistPress}
          isInWishlist={isInWishlist}
        />
        <ProductDescription content={product.description} />
        {/* <ProductRelated products={product.relatedProducts} /> */}
      </Content>
    </Container>
  );
};

Product.propTypes = {
  product: productType.isRequired,
  isInWishlist: PropTypes.bool.isRequired,
};

export default Product;
