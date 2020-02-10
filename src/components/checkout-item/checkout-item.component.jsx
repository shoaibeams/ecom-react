import React from 'react'
import { connect } from 'react-redux'
import './checkout-item.styles.scss'
import {
  clearItemsFromCart,
  addItemFromCart,
  removeItemsFromCart
} from '../../redux/cart/cart.actions'

const CheckoutItem = ({
  cartItem,
  clearItemsFromCart,
  removeItemsFromCart,
  addItemFromCart
}) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItemsFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemFromCart(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemsFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

export default connect(null, {
  clearItemsFromCart,
  removeItemsFromCart,
  addItemFromCart
})(CheckoutItem)
