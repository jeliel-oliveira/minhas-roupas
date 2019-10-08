import React from 'react'
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, removeItem }) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'
                    onClick={() => { removeItem(cartItem) }}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow'
                    onClick={() => { addItem(cartItem) }}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button'
                onClick={() => { removeItemFromCart(id) }}>
                &#10005;
        </div>
        </div>);
}
const mapDispatchToProps = dispatch => ({
    remoremoveItemFromCartveItem: id_item => dispatch(removeItemFromCart(id_item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);