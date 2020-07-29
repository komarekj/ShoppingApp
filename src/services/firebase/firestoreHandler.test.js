import mockFirestoreObject from '~/testUtils/mockFirestoreObject';
import { firestore } from './index';
import * as firestoreHandler from './firestoreHandler';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('firestore service handler', () => {
  describe('getProduct', () => {
    test('should return existing product', async () => {
      const productId = 'testProductId';
      const product = mockFirestoreObject({ title: 'testTitle' }, productId);
      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve(product))
      );
      const results = await firestoreHandler.getProduct(productId);

      expect(firestore.doc).toHaveBeenCalledWith(productId);
      expect(results).toEqual({ title: 'testTitle', id: 'testProductId' });
    });

    test('should throw an error for non existing product', async () => {
      const productId = 'testProductId';
      firestore.get.mockReturnValueOnce({ exists: false });

      await expect(firestoreHandler.getProduct(productId)).rejects.toThrowError(
        'product does not exist'
      );
    });
  });

  describe('getCollection', () => {
    const collectionId = 'testCollectionId';

    test('should return existing collection', async () => {
      const collection = mockFirestoreObject(
        { title: 'testTitle' },
        collectionId
      );
      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve(collection))
      );
      const results = await firestoreHandler.getCollection(collectionId);

      expect(firestore.doc).toHaveBeenCalledWith(collectionId);
      expect(results).toEqual({ title: 'testTitle', id: 'testCollectionId' });
    });

    test('should throw an error for non existing collection', async () => {
      firestore.get.mockReturnValueOnce({ exists: false });

      await expect(
        firestoreHandler.getCollection(collectionId)
      ).rejects.toThrowError('collection does not exist');
    });
  });

  describe('getCollectionProducts', () => {
    const collectionId = 'testCollectionId';

    test('should get collection products', async () => {
      const products = [...Array(20)].map((item, idx) =>
        mockFirestoreObject({ title: `testTitle${idx}` }, `testProductId${idx}`)
      );

      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve({ docs: products }))
      );
      const results = await firestoreHandler.getCollectionProducts(
        collectionId
      );

      expect(firestore.where).toHaveBeenCalledWith(
        'collections',
        'array-contains',
        collectionId
      );
      expect(results.products[0]).toEqual({
        title: 'testTitle0',
        id: 'testProductId0',
      });
      expect(results.products.length).toBe(20);
      expect(results.isLastPage).toBe(false);
    });

    test('should get collection last page', async () => {
      const products = [
        mockFirestoreObject({ title: 'testTitle' }, 'testProductId'),
      ];

      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve({ docs: products }))
      );
      const results = await firestoreHandler.getCollectionProducts(
        collectionId
      );

      expect(results.isLastPage).toBe(true);
    });

    test('should get collection page after product id', async () => {
      const lastProductId = 'testLastProductId';
      const lastProduct = mockFirestoreObject(
        { title: 'testTitle' },
        lastProductId
      );

      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve(lastProduct))
      );
      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve({ docs: [] }))
      );

      await firestoreHandler.getCollectionProducts(collectionId, lastProductId);

      expect(firestore.startAfter).toHaveBeenCalledWith(lastProduct);
    });
  });

  describe('getProducts', () => {
    test('should get products', async () => {
      const productIds = ['testProduct1', 'testProduct2'];
      const products = [
        mockFirestoreObject({ title: 'testTitle1' }, 'testProductId1'),
        mockFirestoreObject({ title: 'testTitle2' }, 'testProductId2'),
      ];

      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve({ docs: products }))
      );

      const results = await firestoreHandler.getProducts(productIds);

      expect(firestore.where).toHaveBeenCalledWith(
        expect.anything(),
        'in',
        productIds
      );
      expect(results.length).toBe(2);
      expect(results[0]).toEqual({ title: 'testTitle1', id: 'testProductId1' });
    });

    test('should get products in chunks', async () => {
      const productIds = [...Array(20)].map(
        (item, idx) => `testProductId${idx}`
      );

      const products = [...Array(10)].map((item, idx) =>
        mockFirestoreObject({ title: `testTitle${idx}` }, `testProductId${idx}`)
      );

      firestore.get.mockReturnValue(
        new Promise((resolve) => resolve({ docs: products }))
      );

      const results = await firestoreHandler.getProducts(productIds);

      expect(firestore.get).toHaveBeenCalledTimes(2);
      expect(results.length).toBe(20);
    });
  });

  describe('getConfig', () => {
    test('should get config', async () => {
      const config = [
        mockFirestoreObject({ testKey: 'testValue2' }, 'testConfigId1'),
        mockFirestoreObject({ testKey: 'testValue2' }, 'testConfigId2'),
      ];

      firestore.get.mockReturnValueOnce(
        new Promise((resolve) => resolve({ docs: config }))
      );

      const results = await firestoreHandler.getConfig();

      expect(results.testConfigId1).toEqual({
        testKey: 'testValue2',
        id: 'testConfigId1',
      });
    });
  });

  describe('createNewOrder', () => {
    test('should create order', async () => {
      const orderData = { testKey: 'testValue' };
      await firestoreHandler.createNewOrder(orderData);
      expect(firestore.set).toHaveBeenCalledWith(orderData);
    });
  });

  describe('getAccountOrders', () => {
    test('should get account orders', async () => {
      const userId = 'testUserId';
      await firestoreHandler.getAccountOrders(userId);
      expect(firestore.where).toHaveBeenCalledWith('userId', '==', userId);
      expect(firestore.get).toHaveBeenCalled();
    });
  });

  describe('createAccount', () => {
    test('should create an account', async () => {
      const userId = 'testUserId';
      const data = { testKey: 'testValue' };
      await firestoreHandler.createAccount(userId, data);
      expect(firestore.doc).toHaveBeenCalledWith(userId);
      expect(firestore.set).toHaveBeenCalledWith(data);
    });
  });
});
