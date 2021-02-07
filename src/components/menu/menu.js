import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './menu.css';

const Menu = props => {
    const user = useSelector(state => state.user.logedUser);
    let isLoged = false;
    if(user) isLoged = true;
    return(
        props.visible
        ?<div className="menuContainer">
            <ion-icon onClick={props.closeMenu} name="close"></ion-icon>
            {
                logedUser
                ?<div className="menuLogBar">
                    <img alt="user" src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"/>
                    <span>Elvi Miraka</span>
                    <Link to="/llogaria" className="links">
                        <p>Shiko Profilin</p>
                    </Link>
                </div>
                :<div className="menuLogBar">
                    <Link to="/hyr" className="links">
                        <p>Hyr</p>
                    </Link>
                    <Link to="/regjistrohu" className="links">
                        <p>Regjistrohu</p>
                    </Link>
                </div>
            }
        </div>
        :null
    )
}

export default Menu;