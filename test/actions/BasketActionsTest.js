3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import * as BasketActions from 'actions/BasketActions'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dispatcher from 'components/Dispatcher';


describe('BasketActions', function() {
  describe('create', function() {
    const basketCreated = sinon.spy(BasketActions.received)
    it('creates a basket', function() {
      BasketActions.create([1])
      expect(basketCreated).to.have.been.calledOnce
    })

  })

})
