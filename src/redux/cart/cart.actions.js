import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemFromCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItemsFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEMS_FROM_CART,
  payload: item
})

export const clearItemsFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEMS_FROM_CART,
  payload: item
})
