import {
  FETCH_PRODUCTS_SUCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCESS,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE
} from './types'

// Action Creators

export function fetchProductsSuccess (products) {
  return {
    type: FETCH_PRODUCTS_SUCESS,
    payload: products
  }
}
export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_SUCESS,
    payload: error
  }
}
export function fetchProductSuccess (product) {
  return {
    type: FETCH_PRODUCT_SUCESS,
    payload: product
  }
}
export function fetchProductFailure (error) {
  return {
    type: FETCH_PRODUCT_SUCESS,
    payload: error
  }
}
export function saveProductSuccess () {
  return {
    type: SAVE_PRODUCT_SUCCESS,
  }
}
export function saveProductFailure (error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error
  }
}
