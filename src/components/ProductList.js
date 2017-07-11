import React from 'react';
import ProductStore from '../stores/ProductStore.js';
import * as ProductActions from '../actions/ProductActions';

class ProductList extends React.Component {
  constructor() {
    super()
    this.state = {
      products: ProductStore.getAll()
    }
  }

  componentWillMount() {
    ProductActions.fetchProducts();
    ProductStore.on('change', () => {
      console.log(this)
      this.setState({
        products: ProductStore.getAll()
      })
    })
  }

  render() {
    const listItems = this.state.products.map((product) =>
      <li key={product.id}>{product.name} - {product.price} - {product.id}</li>
    );

    return (
      <ul className="productList">
        {listItems}
      </ul>
    )
  }
}

export default ProductList
