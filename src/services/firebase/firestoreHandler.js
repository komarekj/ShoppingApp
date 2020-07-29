import _ from 'lodash';
import * as firebase from 'firebase';
import { firestore } from './index';
import { getData } from './firestoreHelpers';

const COLLECTION_PAGE_LIMIT = 20;

export const getProduct = async (productId) => {
  const product = await firestore.collection('products').doc(productId).get();

  if (!product.exists) {
    throw Error('product does not exist');
  }

  return getData(product);
};

export const getCollection = async (collectionId) => {
  const collectionDoc = await firestore
    .collection('collections')
    .doc(collectionId)
    .get();

  if (!collectionDoc.exists) {
    throw Error('collection does not exist');
  }

  return getData(collectionDoc);
};

export const getCollectionProducts = async (collectionId, afterProductId) => {
  const productsRef = firestore.collection('products');
  let query = productsRef.where('collections', 'array-contains', collectionId);

  if (afterProductId) {
    const afterProductDoc = await productsRef.doc(afterProductId).get();
    query = query.startAfter(afterProductDoc);
  }

  const productDocs = await query.limit(COLLECTION_PAGE_LIMIT).get();

  const products = productDocs.docs.map((item) => getData(item));
  const isLastPage = products.length < COLLECTION_PAGE_LIMIT;

  return { products, isLastPage };
};

export const getProducts = async (productIds) => {
  // Firebase has a limit for 10 items in an array condition
  // and getAll func isn't supported...so loading it in chunks
  // until there is a better way - e.g., create a cloud function
  const productIdsChunks = _.chunk(productIds, 10);

  const productsRef = firestore.collection('products');
  const documentId = firebase.firestore.FieldPath.documentId();
  const productRequest = productIdsChunks.map((chunk) =>
    productsRef.where(documentId, 'in', chunk).get()
  );

  const resultsChunks = await Promise.all(productRequest);
  const resultsData = resultsChunks.map((chunk) => chunk.docs.map(getData));
  const flatResults = resultsData.flat();
  return flatResults;
};

export const getConfig = async () => {
  const configDocs = await firestore.collection('config').get();
  const config = configDocs.docs.map((item) => getData(item));
  const configByKey = _.keyBy(config, 'id');
  return configByKey;
};

export const createNewOrder = async (orderData) => {
  await firestore.collection('orders').doc().set(orderData);
};

export const getAccountOrders = async (userId) => {
  const ordersDocs = await firestore
    .collection('orders')
    .orderBy('created', 'desc')
    .where('userId', '==', userId)
    .get();
  const orders = ordersDocs.docs.map((order) => getData(order));
  return orders;
};

export const createAccount = async (userId, data) => {
  await firestore.collection('accounts').doc(userId).set(data);
};
