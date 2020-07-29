import React, { useEffect, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Collection from './Collection';
import CollectionSkeleton from './Skeleton';
import CollectionError from './Error';
import { fetchCollection } from '~/redux/collections';
import withLoader from '~/components/withLoader';

const CollectionWithLoader = withLoader(
  Collection,
  CollectionSkeleton,
  CollectionError
);

const CollectionContainer = () => {
  const { params } = useRoute();
  const collectionId = params.id;

  const status = useSelector((state) => state.collections.status[collectionId]);
  const collection = useSelector(
    (state) => state.collections.entities[collectionId]
  );
  const allProducts = useSelector((state) => state.products.entities);
  const products = useMemo(
    () =>
      collection && collection.productIds
        ? collection.productIds.map((productId) => allProducts[productId])
        : [],
    [collection, allProducts]
  );
  const wishlist = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
      dispatch(fetchCollection({ collectionId }));
    }
  }, [dispatch, collectionId]);

  return (
    <CollectionWithLoader
      status={status}
      collection={collection}
      products={products}
      wishlist={wishlist}
    />
  );
};

export default CollectionContainer;
