3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import BasketSource from 'sources/BasketSource'
import sinon from 'sinon'
import axios from 'axios'

import util from 'util';

describe('BasketSource', function() {
  describe('create', function() {

    it('calls the the /checkouts', function(done) {
      BasketSource.create([1,2,3,4], (response) => {
        expect(response.type).to.equal('checkouts')
        expect(response).to.have.property('id')
        done()
      }, done)
    })

  })
})
