import React from 'react';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>Eu já tenho uma conta</h2>
                <span>Insira seu email e sua senha.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput id="email" name="email" type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required />

                    <FormInput id="password" name="password" type="password"
                        handleChange={this.handleChange}
                        label="Password"
                        value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type="submit">Entrar</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Entrar com Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;