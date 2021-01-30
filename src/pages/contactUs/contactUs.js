import React from 'react';
import './contactUs.css';
import {useDispatch} from 'react-redux';
import * as notificationActions from '../../store/actions/notification';

const ContactUs = props => {
    const dispatch = useDispatch();
    return(
        <div className="contactPage">
            <div className="side">
                <p className="head">Na Kontaktoni</p>
                <p>Telefon: 0696969699</p>
                <p>Email: contact@lexoj.al</p>
                <p>Adresa: Tirane</p>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe title="n" width="100%" height="100%" id="gmap_canvas" src={"https://maps.google.com/maps?q=Tirane&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="side">
                <p className="head">Ler nje mesazh</p>
                <div className="contacterDetails">
                    <label>Emri</label>
                    <input type="text"/>
                </div>
                <div className="contacterDetails">
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className="contacterMessage">
                    <textarea></textarea>
                    <button 
                        onClick={()=>
                            dispatch(notificationActions.displayNotification({message: `Mesazhi juaj u dergua me sukses`, priority: 'white'}))
                        }
                    >
                        Dergo
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ContactUs;