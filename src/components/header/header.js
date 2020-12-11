import React from 'react';
import Logo from './lexojlogo.png';
import './header.css';
import {Link} from 'react-router-dom';


const Header = props =>{
    return(
        <div className="header-bar">
            <Link to="/">
                <img alt="logo" src={Logo} />
            </Link>
            <div className="search-bar">
                <input type='text' />
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <div className="log-bar">
                <Link to="/hyr" style={{ textDecoration: 'none' }}>
                    <div>Hyr</div>
                </Link>
                <Link to="/regjistrohu" style={{ textDecoration: 'none' }}>
                    <div>Regjistrohu</div>
                </Link>
            </div>
        </div>
    )
}

export default Header;