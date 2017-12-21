import React, {PropTypes} from 'react'
import uuid from 'uuid'

import CartItem from './CartItem'

const CartItemList = ({items, onRemoveItem}) => (
  <div className='list-groups'>
    <h2>Shoping Cart</h2>
    {
      items.map(item => (
        <CartItem
          key={uuid.v4()}
          onRemoveItem={onRemoveItem}
          {...item}
        />
      )).reverse()
    }
  </div>
)

CartItemList.defaultProps = {
  items: []
}
CartItemList.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveItem: PropTypes.func.isRequired
}

export default CartItemList
