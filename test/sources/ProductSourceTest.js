3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import ProductSource from 'sources/ProductSource'

describe('ProductSource', ()=> {
  describe('fetchProducts', () => {
    beforeEach(() => {
    })

    it('fectches products', (done) => {
      ProductSource.fetchProducts((response) =>{
        console.log(response)
        done()
      })
    })
  })
})
