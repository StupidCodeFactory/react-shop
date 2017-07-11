require('normalize.css/normalize.css');
require('imperavi-kube/dist/css/kube.css');
require('styles/App.css');

import React from 'react';
import ProductList from './ProductList';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Products</h1>
        <ProductList/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
