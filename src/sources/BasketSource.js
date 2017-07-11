'use strict';

import util from 'util';

import superagent from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';

superagentJsonapify(superagent);

class BasketSource {
  create(productIds, success, error) {
    return superagent
      .post('http://localhost:3000/checkouts')
      .send(productIds)
      .set('Accept', 'application/json')
      .end((err, result) => {
        if(err) {
          error(err)
        } else {
          success(result.body.data)
        }
      })
  }
};

export default new BasketSource
