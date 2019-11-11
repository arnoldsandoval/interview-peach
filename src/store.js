import React from 'react'
import PropTypes from 'prop-types'
import { sumOfArrayObjectKeys, integerToCurrency } from 'utils'
import { products } from 'data'

export const Store = React.createContext()

const PRODUCT = {
  id: '',
  name: '',
  cost: 0,
  img: {
    alt: '',
    src: {
      x1: '',
      x2: ''
    }
  },
  description: '',
  specs: [{ label: '', value: '' }]
}

const initialState = {
  cart: {
    subtotal: 0,
    items: []
  },
  products,
  selectedProduct: PRODUCT,
  searchQuery: null
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return {
        ...state,
        products
      }
    case 'FILTER_PRODUCT_LIST':
      return {
        ...state,
        searchQuery: action.query,
        products: products.filter(
          ({ name }) =>
            name.toUpperCase().indexOf(action.query.toUpperCase()) !== -1
        )
      }
    case 'SET_ACTIVE_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload || products[0]
      }
    case 'CART_ADD':
      const items = [...state.cart.items, action.payload]
      const subtotal = sumOfArrayObjectKeys(items, 'cost')

      console.log(
        '%c🛒 Cart updated',
        'margin: 50px 0 10px;background: #ccc; color: #000;font-size: 1.6rem; padding:1rem;'
      )
      console.log(
        `%c💵 The new subtotal is: ${integerToCurrency(subtotal)}`,
        'font-size: 0.8rem; padding:1rem;'
      )
      console.table(items)

      return {
        ...state,
        cart: {
          subtotal,
          items
        }
      }
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Store.Provider value={value}>{children}</Store.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
