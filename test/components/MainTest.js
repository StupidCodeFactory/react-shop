/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import createComponent from 'helpers/shallowRenderHelper';
import * as ProductActions from 'actions/Productactions';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Main from 'components/Main';

describe('MainComponent', function () {
  const fetchProducts = sinon.spy(ProductActions.fetchProducts);
  beforeEach(function () {
    this.MainComponent = createComponent(Main);
  });

  it('should have its component name as default className', function () {
    expect(this.MainComponent.props.className).to.equal('index');
  });

  it('triggers a fetch action', function () {
    expect(fetchProducts).to.have.been.calledOnce
  })
});
