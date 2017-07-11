import dispatcher from '../components/Dispatcher.js';
import {create} from 'apisauce';

const api = create({
  baseURL: 'http://0.0.0.0:3000',
  headers: {'Accept': 'application/json'}
})

export function fetchProducts(ProductSource ) {

  api.get('/products').then((response) => {
    dispatcher.dispatch({
      type: 'PRODUCTS_RECEIVED',
      products: response.data.data
    })}
  ).catch((error) => {
    console.log(error);
    dispatcher.dispatch();
  });
}

export function updateProducts(location) {
  dispatcher.dispatch(location);
}

export function productsFailed(errorMessage) {
  dispatcher.dispatch(errorMessage)
}

export function loadingResults() {
  dispatcher.dispatch();
}

export function receivedProducts(products) {
  dispatcher.dispatch(products);
}
