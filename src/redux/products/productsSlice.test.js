import LoadingStatus from '~/constants/LoadingStatus';
import productReducer, { setProductsData } from './productsSlice';
import { fetchProduct } from './productsThunks';

describe('product reducer', () => {
  describe('setProductsData action', () => {
    test('should set products data', () => {
      const state = { status: {}, entities: { product1: { id: 'product1' } } };
      const products = [{ id: 'product2' }];
      const action = setProductsData({ products });

      const results = productReducer(state, action);

      expect(results.entities.product1).toEqual({ id: 'product1' });
      expect(results.entities.product2).toEqual({ id: 'product2' });
    });
  });

  describe('fetchProduct thunk', () => {
    test('should set product loading status on pending', () => {
      const state = { status: {} };
      const action = fetchProduct.pending(null, {
        productId: 'testProduct',
      });
      const results = productReducer(state, action);
      expect(results.status.testProduct).toEqual(LoadingStatus.LOADING);
    });

    test('should set product error status on rejected', () => {
      const state = { status: {} };
      const action = fetchProduct.rejected(null, null, {
        productId: 'testProduct',
      });
      const results = productReducer(state, action);
      expect(results.status.testProduct).toEqual(LoadingStatus.ERROR);
    });

    test('should set product status and data on fulfilled', () => {
      const state = { status: {}, entities: {} };
      const product = { id: 'testProduct' };
      const action = fetchProduct.fulfilled({ product });

      const results = productReducer(state, action);

      expect(results.status.testProduct).toEqual(LoadingStatus.FINISHED);
      expect(results.entities.testProduct).toEqual(product);
    });
  });
});
