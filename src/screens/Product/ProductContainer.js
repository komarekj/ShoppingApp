import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import ProductSkeleton from './Skeleton';
import ProductError from './Error';
import withLoader from '~/components/withLoader';
import { fetchProduct } from '~/redux/products';

const ProductWithLoader = withLoader(Product, ProductSkeleton, ProductError);

const ProductContainer = () => {
  const { params } = useRoute();
  const productId = params.id;

  const status = useSelector((state) => state.products.status[productId]);
  const product = useSelector((state) => state.products.entities[productId]);
  const wishlist = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlist.includes(productId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
      dispatch(fetchProduct({ productId }));
    }
  }, [dispatch, productId]);

  return (
    <ProductWithLoader
      status={status}
      product={product}
      isInWishlist={isInWishlist}
    />
  );
};

export default ProductContainer;
