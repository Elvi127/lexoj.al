import React from 'react';
import './notification.css';
import {useSelector, useDispatch} from 'react-redux';
import * as notificationActions from '../../store/actions/notification';

const Notification = props => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);

    if(notification.active){
        return(
            <div>
                <div className="notificationContainer">
                    <ion-icon onClick={()=>dispatch(notificationActions.removeNotification())} name="close"></ion-icon>
                    <p className="notificationMessage">{notification.message}</p>
                </div>
                <div style={{height: 0}}>
                {
                    setTimeout(()=>dispatch(notificationActions.removeNotification()), 3000)
                }
                </div>
            </div>
        )
    }else return null;
};

export default Notification;