import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';


const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Loja</OptionLink>
                <OptionLink to='/shop'>Contato</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}> Sair </OptionLink>
                        :
                        <OptionLink to='/signin'>Entrar</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null :
                <CartDropdown />}
        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);