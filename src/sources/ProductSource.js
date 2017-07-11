'use strict';

import * as ProductActions from '../actions/ProductActions';
import util from 'util';
import {create} from 'apisauce';

const api = create({
  baseURL: 'http://0.0.0.0:3000',
  headers: {'Accept': 'application/json'}
})

class ProductSource {
  fetchProducts() {
    api.get('/products').then(
      ProductActions.receivedProducts
    ).catch(
      ProductActions.productsFailed
    );

    return
  }
};

export default new ProductSource
