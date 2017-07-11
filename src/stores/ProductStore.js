'use strict';
import { EventEmitter } from 'events/events';
import dispatcher from '../components/Dispatcher.js';

class ProductStore extends EventEmitter {
  constructor() {
    super();
    this.products = [];
  }

  getAll() {
    /* ProductActions.fetchProducts();*/
    return this.products;
  }

  reloadProducts(products) {
    this.products = products;
    console.reloaded
    this.emit('change');
  }

  handleActions(action) {

    switch(action.type) {
      case "PRODUCTS_RECEIVED": {
        let products = action.products.map((product) => {
          product.attributes.id = product.id;
          return product.attributes
        })
        console.log(products);
        this.reloadProducts(products)
      }

    }
  }
}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore))
export default productStore;
