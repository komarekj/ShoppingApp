import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWishlistProducts,
  selectWishlistProducts,
} from '~/redux/wishlist';
import Wishlist from './Wishlist';
import WishlistSkeleton from './Skeleton';
import WishlistError from './Error';
import withLoader from '~/components/withLoader';

const WishlistWithLoader = withLoader(
  Wishlist,
  WishlistSkeleton,
  WishlistError
);

const WishlistContainer = () => {
  const status = useSelector((state) => state.wishlist.status);
  const wishlist = useSelector((state) => state.wishlist.items);
  const products = useSelector(selectWishlistProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
      dispatch(fetchWishlistProducts());
    }
  }, [dispatch, status]);

  return (
    <WishlistWithLoader
      status={status}
      products={products}
      wishlist={wishlist}
    />
  );
};

export default WishlistContainer;
