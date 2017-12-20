import {
  LOAD_CART_ITEMS,
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS
} from './types'

export function loadCartItems () {
  return {
    type: LOAD_CART_ITEMS
  }
}

export function addCartItem (item) {
  return {
    type: ADD_CART_ITEMS,
    payload: item
  }
}

export function removeCartItem (item) {
  return {
    type: REMOVE_CART_ITEMS,
    payload: item
  }
}
