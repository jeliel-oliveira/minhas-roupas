import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Senhas diferentes em senha e confirmar senha!');
            return;
        }
        if(password.length < 6){
            alert('Mínimo de 6 caracteres na senha é necessário!');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>Não possuo uma conta...</h2>
                <span>Crie uma conta agora mesmo</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Nome'
                        required>
                    </FormInput>
                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required>
                    </FormInput>
                    <FormInput type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Senha'
                        required>
                    </FormInput>
                    <FormInput type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirmar Senha'
                        required>
                    </FormInput>
                    <CustomButton type='submit'>Cadastrar</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;