import React from 'react';
import Logo from '../../components/header/lexojlogo.png';
import '../signIn/sign.css';

const SignUp = props => {
    return(
        <div className="sign-screen">
            <div className="logo-side">
                <img alt="logo" src={Logo}/>
            </div>
            <div className="sign-side">
                <div className="sign-card">
                    <p>Regjistrohu</p>
                    <input type="text" placeholder="emri"/>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="fjalekalimi"/>
                    <button>Regjistrohu</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;