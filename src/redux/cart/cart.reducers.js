import CartActionTypes from './cart.types'
import { addItemsToCart, removeItemsFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    default:
      return state
  }
}
