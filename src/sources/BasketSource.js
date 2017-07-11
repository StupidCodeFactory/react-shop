'use strict';

import util from 'util';
import {create} from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3000',
  headers: {'Accept': 'application/json'}
})

class ProductSource {
  create(productIds, success, error) {
    return api.post('/checkouts')
  }
};

export default new ProductSource
