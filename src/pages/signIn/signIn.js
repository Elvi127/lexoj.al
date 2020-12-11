import React from 'react';
import Logo from '../../components/header/lexojlogo.png';
import './sign.css';

const SignIn = props => {
    return(
        <div className="sign-screen">
            <div className="logo-side">
                <img alt="logo" src={Logo}/>
            </div>
            <div className="sign-side">
                <div className="sign-card">
                    <p>Hyr</p>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="fjalekalimi"/>
                    <button>Hyr</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;