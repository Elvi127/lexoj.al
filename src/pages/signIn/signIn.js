import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as userActions from '../../store/actions/user';
import * as notificationActions from '../../store/actions/notification';
import Logo from '../../components/header/lexojlogo3.png';
import URL from '../../components/url';
import './sign.css';

const SignIn = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userDetails, setDetails] = useState({});

    const onFormValues = (key, value) => {
        setDetails({...userDetails, [key]: value});
    }
    const signInUser = () => {
        fetch(`${URL}/signin`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: userDetails.email,
                password: userDetails.password,
            })
        }).then(response => response.json()).then(data =>{
            console.log(data)
            if(data.status === 'success'){
                dispatch(userActions.loginUser(data.token))
                dispatch(notificationActions.displayNotification({message: `Ju u kycet me sukses`, priority: 'white'}))
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
                    <p>Hyr</p>
                    <input onChange={(e)=>onFormValues('email', e.target.value)} type="email" placeholder="email" />
                    <input onChange={(e)=>onFormValues('password', e.target.value)} type="password" placeholder="fjalekalimi"/>
                    <button onClick={signInUser}>Hyr</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;