import dispatcher from '../components/Dispatcher';
import ProductSource from '../sources/ProductSource';

export function fetchProducts() {
  ProductSource.fetchProducts(this.receivedProducts, this.productsFailed)
}

export function productsFailed(errorMessage) {
  dispatcher.dispatch(errorMessage)
}

export function receivedProducts(products) {

  dispatcher.dispatch(products);
}
