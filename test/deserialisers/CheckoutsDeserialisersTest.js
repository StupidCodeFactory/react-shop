require('sinon-chai')
import checkoutDeserialiser from 'deserialisers/CheckoutDeserialiser'
import * as BasketActions from 'actions/BasketActions'

describe('CheckoutDeserialiser', function() {

  let rawCheckout = { type: 'checkouts', id: 'some-id' }

  it('is hooked to the BasketAction.received', function() {
    const spy = sinon.spy(checkoutDeserialiser, 'deserialise')
    BasketActions.received(rawCheckout)
    spy.calledWithExactly({type: 'BASKET_RECEIVED', payload: rawCheckout})
    checkoutDeserialiser.deserialise.restore()
  })

  describe('#deserialise', function() {
    it('deserialises the raw checkout', function(){
      expect(checkoutDeserialiser.deserialise(rawCheckout)).to.equal({id: rawCheckout.id})
    })
  })
})
