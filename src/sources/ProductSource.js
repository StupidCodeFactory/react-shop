'use strict';

import * as ProductActions from '../actions/ProductActions';
import util from 'util';
import {create} from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3000',
  headers: {'Accept': 'application/json'}
})

class ProductSource {
  fetchProducts(success, error) {
    return api.get('/products').then((response) => {
      if (response.ok) {
        success(response)
      } else {
        error(response)
      }
    }).catch((ohno) => {
      error(ohno)
    }
    );
  }
};

export default new ProductSource
