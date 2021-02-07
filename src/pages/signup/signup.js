import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/header/lexojlogo3.png';
import URL from '../../components/url';
import * as userActions from '../../store/actions/user';
import * as notificationActions from '../../store/actions/notification';
import '../signIn/sign.css';

const SignUp = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userDetails, setDetails] = useState({});

    const onFormValues = (key, value) => {
        setDetails({...userDetails, [key]: value});
    }

    const signUpUser = () => {
        fetch(`${URL}/signup`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: userDetails.username,
                email: userDetails.email,
                password: userDetails.password,
                passwordConfirm: userDetails.passwordConfirm
            })
        }).then(response => response.json()).then(data =>{
            console.log(data)
            if(data.status === 'success'){
                dispatch(userActions.loginUser(data.token))
                dispatch(notificationActions.displayNotification({message: `Ju u regjistruat me sukses`, priority: 'white'}))
                history.push('/');
            }
        });
    }


    return(
        <div className="sign-screen">
            <div className="logo-side">
                <img alt="logo" src={Logo}/>
            </div>
            <div className="sign-side">
                <div className="sign-card">
                    <p>Regjistrohu</p>
                    <input onChange={(e)=>onFormValues('username', e.target.value)} type="text" placeholder="emri"/>
                    <input onChange={(e)=>onFormValues('email', e.target.value)} type="email" placeholder="email" />
                    <input onChange={(e)=>onFormValues('password', e.target.value)} type="password" placeholder="fjalekalimi"/>
                    <input onChange={(e)=>onFormValues('passwordConfirm', e.target.value)} type="password" placeholder="konfirmo fjalekalimin"/>
                    <button onClick={signUpUser}>Regjistrohu</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;