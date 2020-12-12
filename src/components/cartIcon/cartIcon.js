import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './cartIcon.css';

const CartIcon = props => {
    const location = useLocation();
    if(location.pathname.includes('hyr') || location.pathname.includes('regjistrohu') || location.pathname.includes("shporte"))
     return null;
    else return(
        <Link to='/shporte' style={{ textDecoration: 'none' }}>
            <div className="cartIconContainer">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </Link>
    )
}

export default CartIcon;