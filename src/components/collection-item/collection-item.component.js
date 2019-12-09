import React from 'react';
import { connect } from 'react-redux';
// import './collection-item.style.scss';
import { addItem } from '../../redux/cart/cart.actions';
import { AddButton, CollectionFooter, CollectionFooterName, CollectionItemContainer, CollectionItemImage } from './collection-item.styles';
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <CollectionItemImage style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </CollectionItemImage>
            <CollectionFooter>
                <CollectionFooterName>{name}</CollectionFooterName>
                <span className='price'>${price}</span>
            </CollectionFooter>
            <AddButton inverted onClick={()=>addItem(item)}> Adicionar ao Carrinho</AddButton>
        </CollectionItemContainer>
    );
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);