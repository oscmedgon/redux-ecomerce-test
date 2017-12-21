import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'
import ProductDetail from './ProductDetail'

class ProductDetailContainer extends Component {
  constructor () {
    super()
    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }
  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item)
  }
  async componentWillMount () {
    await this.props.productActions.fetchProduct(this.props.productId)
  }
  render () {
    console.log(this.props)
    return (
      <ProductDetail
        loading={this.props.loading}
        product={this.props.product}
        onAddItem={this.handleOnAddItem}
      />
    )
  }
}

ProductDetailContainer.PropTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired,
  onAddItem: PropTypes.func.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    productId: ownProps.params.productId,
    product: state.activeProduct.product,
    loading: state.activeProduct.loading}
}

function mapDispathToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductDetailContainer)
