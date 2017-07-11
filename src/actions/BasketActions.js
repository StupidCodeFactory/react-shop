import dispatcher from '../components/Dispatcher';
import BasketSource from '../sources/BasketSource';

export function create(productIds) {
  BasketSource
    .create(productIds, this.received, this.creationFailed)
}

export function creationFailed(error) {
  console.log(error)
}

export function received(products) {
  dispatcher.dispatch(products);
}
