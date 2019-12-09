import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...props }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...props} />
        {
            label ? 
            <label className={`form-input-label ${props.value.length > 0 ? 'shrink' : ''}`}> 
                {label}
            </label> 
            : 
            null
        }
    </div>
)
export default FormInput;