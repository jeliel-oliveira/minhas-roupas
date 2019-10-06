import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn, inverted ,...otherPRops}) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in':''} 
    ${inverted ? 'inverted':''}`} 
    {...otherPRops}>
        {children}
    </button>
)
export default CustomButton;