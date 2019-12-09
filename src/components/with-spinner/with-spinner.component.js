import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';
/*
*   Componentes de Alta Ordem recebem um componente, fazem alguma lógica ou comportamento, e retornam
*  o componente envolvido no Componente de Alta Ordem

* */
const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) =>{
        return isLoading ?
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay> :
            <WrappedComponent {...otherProps} />
    };
    return Spinner;
};
export default WithSpinner;