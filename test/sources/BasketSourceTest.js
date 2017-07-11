3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import ProductSource from 'sources/ProductSource'

describe('ProductSource', function() {
  describe('fetchProducts', function() {

    it('fectches products', function(done) {
      ProductSource.fetchProducts(done, done)
    })

  })
})
