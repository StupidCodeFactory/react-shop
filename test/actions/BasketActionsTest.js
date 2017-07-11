3/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import * as BasketActions from 'actions/BasketActions'
import BasketSource from 'sources/BasketSource'
import sinonChai from 'sinon-chai';
import dispatcher from 'components/Dispatcher';


describe('BasketActions', function() {
  describe('create', function() {

    it('creates a basket', async function() {

      const payload = [1]
      const basket = { id: 'some-id', type: 'checkouts'}
      sinon.stub(BasketActions, 'received')
      const expectation = sinon.mock(BasketSource)
      expectation.expects('create').once().withExactArgs(payload, BasketActions.received, BasketActions.creationFailed)

      await BasketActions.create(payload)

      expectation.verify();
      expect(BasketActions.received).to.have.been.calledOnce
      BasketActions.received.restore()
    })

  })

})
