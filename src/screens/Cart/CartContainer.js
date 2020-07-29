import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCartProducts,
  selectCartProductItems,
  selectCartTotal,
} from '~/redux/cart';
import Cart from './Cart';
import CartSkeleton from './Skeleton';
import CartError from './Error';
import withLoader from '~/components/withLoader';

const CartWithLoader = withLoader(Cart, CartSkeleton, CartError);

const CartContainer = () => {
  const status = useSelector((state) => state.cart.status);
  const productItems = useSelector(selectCartProductItems);
  const total = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
      dispatch(fetchCartProducts());
    }
  }, [dispatch, status]);

  return (
    <CartWithLoader status={status} productItems={productItems} total={total} />
  );
};

export default CartContainer;
