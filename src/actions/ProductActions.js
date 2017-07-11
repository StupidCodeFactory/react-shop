import dispatcher from '../components/Dispatcher.js';


export function fetchProducts() {
  dispatcher.dispatch();

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
