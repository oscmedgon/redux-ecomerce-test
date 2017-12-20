import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ProductList from './ProductList'
import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'

class ProductListContainer extends Component {
  constructor () {
    super()

    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }
  async ComponentDidMount () {
    await this.props.productActions.fetchProduct()
  }
  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item)
  }
  render () {
    return (
      <ProductList
        loading={this.props.loading}
        products={this.props.products}
        onAddItem={this.handleOnAddItem}
      />
    )
  }
}
ProductListContainer.defaultProps = {
  products: []
}

ProductListContainer.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired
}

function mapStateToProps (state) {
  return {
    products: state.productList.products,
    loading: state.productList.loading
  }
}

function mapDispathToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductListContainer)
