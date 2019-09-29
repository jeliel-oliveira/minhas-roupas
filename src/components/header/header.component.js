import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Loja</Link>
                <Link className='option' to='/shop'>Contato</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}> Sair </div>
                        :
                        <Link className='option' to='/signin'>Entrar</Link>
                }
            </div>

        </div>
    )
}
export default Header;