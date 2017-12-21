import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as cartActions from '../actions/cartActions'
import CartItemList from './CartItemList'

class CartContainer extends Component {
  constructor (props) {
    super(props)
    this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this)
  }
  componentWillMount () {
    console.log(this.props)
    this.props.actions.loadCartItems()
  }
  handleOnRemoveItem (id) {
    this.props.actions.removeCartItem(id)
  }
  render () {
    return (
      <section className='container'>
        <CartItemList
          onRemoveItem={this.handleOnRemoveItem}
          items={this.props.items}
        />
        <hr />
        <div classname='row'>
          <p>Total: <strong>{this.props.total} &euro;</strong></p>
        </div>
      </section>
    )
  }
}

CartContainer.defaultProps = {
  items: [],
  total: 0
}

CartContainer.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
}

function mapStateToProps (state) {
  return {
    items: state.cart.items,
    total: state.cart.total
  }
}
function mapDispatchTOProps (dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchTOProps)(CartContainer)
