import React, {useState} from 'react';
import Logo from './lexojlogo3.png';
import './header.css';
import {Link} from 'react-router-dom';
import ProfileIcon from '../profileIcon/profileIcon';
import SearchComponent from '../searchComponent/searchComponent';


const Header = props =>{
    const isLoged = true;
    const [isSearchOpen, setSearchOpen] = useState(false);
    return(
        <div className="header-bar">
            {
                isSearchOpen?
                <SearchComponent onClick={()=>setSearchOpen(false)} />
                :null
            }
            <Link to="/">
                <img className="logo" alt="logo" src={Logo} />
            </Link>
            <div className="search-bar">
                <input onFocus={()=>setSearchOpen(true)} type='text' />
                <ion-icon name="search-outline"></ion-icon>
            </div>
            {
                isLoged?
                <div className="log-bar">
                    <Link to="/llogaria" style={{ textDecoration: 'none' }}>
                        <ProfileIcon />
                    </Link>
                </div>
                :<div className="log-bar">
                    <Link to="/hyr" style={{ textDecoration: 'none' }}>
                        <div>Hyr</div>
                    </Link>
                    <Link to="/regjistrohu" style={{ textDecoration: 'none' }}>
                        <div>Regjistrohu</div>
                    </Link>
                </div>
            } 
        </div>
    )
}

export default Header;