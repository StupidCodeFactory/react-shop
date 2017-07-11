'use strict';

import {create} from 'apisauce';
import ProductActions from '../actions/ProductActions';
import util from 'util';
const api = create({
  baseURL: 'http://0.0.0.0:3000',
  headers: {'Accept': 'application/json'}
})

const ProductSource = {
  fetchProducts() {
    return {
      remote() {
        return api.get('/products')
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: ProductActions.updateProducts,
      error: ProductActions.productsFailed,
      loading: ProductActions.fetchProducts
    }
  }
};

module.exports = ProductSource;
