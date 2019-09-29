import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,...otherPRops}) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in':''} `} 
    {...otherPRops}>
        {children}
    </button>
)
export default CustomButton;