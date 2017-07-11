3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import * as ProductActions from 'actions/ProductActions'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dispatcher from 'components/Dispatcher';


describe('ProductActions', function() {
  describe('fetchProducts', function() {
    const productRecieved = sinon.spy(ProductActions.receivedProducts)
    it('fectches products', function() {
      ProductActions.fetchProducts()
      expect(productRecieved).to.have.been.calledOnce
    })

  })

  describe('receivedProducts', function() {

    it('dispatches to the product store', function() {
      const dispatched = sinon.spy(dispatcher.dispatch)
      const actionPayload = { type: 'PRODUCTS_RECEIVED', products: [] }
      ProductActions.receivedProducts({})
      expect(dispatched).to.have.been.calledOnce
    })
  })
})
