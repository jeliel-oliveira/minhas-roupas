import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './checkout.styles.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>
                    Produto
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Descrição
                </span>
            </div><div className='header-block'>
                <span>
                    Preço
                </span>
            </div><div className='header-block'>
                <span>
                    Quantidade
                </span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                (<CheckoutItem cartItem={cartItem} key={cartItem.id} />)  
            )
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>

    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);