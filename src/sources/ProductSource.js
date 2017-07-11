'use strict';

import * as ProductActions from '../actions/ProductActions';
import util from 'util';
import {create} from 'apisauce';

const api = create({
  baseURL: 'http://0.0.0.0:3000',
  headers: {'Accept': 'application/json'}
})

class ProductSource {
  fetchProducts(success, error) {
    return api.get('/products').then((response) => {
      console.log(response)
      success(response)
    }).catch(() => {
      error()
    });
  }
};

export default new ProductSource
