'use strict';
import { EventEmitter } from 'events/events';

import dispatcher from '../components/Dispatcher.js';

class BasketStore extends EventEmitter {
  constructor() {
    super();
    this.basket = [];
  }

  create() {

  }

  handleActions(action) {

    switch(action.type) {
      case "CREATE": {
        BasketAction.create
      }

    }
  }
}

const basketStore = new BasketStore;
dispatcher.register(productStore.handleActions.bind(productStore))
export default productStore;
