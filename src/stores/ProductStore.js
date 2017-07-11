'use strict';
import { EventEmitter } from 'events/events';
import dispatcher from '../components/Dispatcher.js';
import  ProductSource from '../sources/ProductSource';


class ProductStore extends EventEmitter {
  constructor() {
    super();
    this.products = [
      { id: 1, name: 'Bob', price: '12.23' },
      { id: 2, name: 'Ali', price: '34.69' },
      { id: 3, name: 'Ali', price: '14.64' }
    ];
  }

  getAll() {
    /* ProductActions.fetchProducts();*/
    return this.products;
  }

  handleActions(action) {
    console.log(action)
    /* switch(actions.type) {
     *   case "FETCH_RECEIVED"
     * }*/
  }
}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore))
export default productStore;
