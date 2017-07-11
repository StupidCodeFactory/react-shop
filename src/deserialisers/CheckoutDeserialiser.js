import dispatcher from '../components/Dispatcher'
import BasketActions from '../actions/BasketActions'

class CheckoutDeserialiser {
  handleDeserialise(actions) {
    switch(actions.type) {
      case "BASKET_RECEIVED": {
        deserialise(actions.payload)
      }
    }

  }

  deserialise(payload) {
    return {
      id: payload.id
    }
  }
}

const checkoutDeserialiser = new CheckoutDeserialiser
dispatcher
  .register(
    checkoutDeserialiser
    .handleDeserialise
    .bind(checkoutDeserialiser)
  )
export default checkoutDeserialiser
