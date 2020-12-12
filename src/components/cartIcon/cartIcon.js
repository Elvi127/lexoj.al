import React from 'react';
import { useLocation } from 'react-router-dom'

import './cartIcon.css';

const CartIcon = props => {
    const location = useLocation();
    if(location.pathname.includes('hyr') || location.pathname.includes('regjistrohu'))
     return null;
    else return(
        <div className="cartIconContainer">
            <ion-icon name="cart-outline"></ion-icon>
        </div>
    )
}

export default CartIcon;