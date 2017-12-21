import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ProductListContainer from './Products/ProductListContainer'
import CartContainer from './Cart/CartContainer'
import ProductDetailContainer from './Products/ProductDetailContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProductListContainer} />
    <Route path='/cart' component={CartContainer} />
    <Route path='/detail/:productId' component={ProductDetailContainer} />
  </Route>
)
