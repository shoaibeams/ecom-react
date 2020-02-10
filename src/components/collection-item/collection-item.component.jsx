import React from 'react'
import './collection-item.styles.scss'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import { addItemFromCart } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItemFromCart }) => {
  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemFromCart(item)}>
        Add To Cart
      </CustomButton>
    </div>
  )
}

export default connect(null, { addItemFromCart })(CollectionItem)
