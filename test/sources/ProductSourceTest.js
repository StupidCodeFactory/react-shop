3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import ProductSource from 'sources/ProductSource'
import nock from 'nock'

describe('ProductSource', ()=> {
  describe('fetchProducts', () => {
    beforeEach(() => {
      /* ProductActions.fetchProducts()*/
    })

    it('fectches products', () => {
      nock.recorder.rec();

      ProductSource.fetchProducts()
    })
  })
})
