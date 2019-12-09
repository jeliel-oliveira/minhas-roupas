import React from 'react';
import './homepage.styles.scss'
const HomePage = ()=>{
    return (
        <div className='homePage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Chapéus</h1>
                        <span className='subtitle'>Compre agora!</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                    <h1 className='title'>Para Mulheres</h1>
                        <span className='subtitle'>Compre agora!</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                    <h1 className='title'>Para Homens</h1>
                        <span className='subtitle'>Compre agora!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;