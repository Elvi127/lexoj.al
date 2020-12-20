import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

const Menu = props => {
    const [logedUser, setLogedUser] = useState(true) 
    return(
        props.visible
        ?<div className="menuContainer">
            <ion-icon onClick={props.closeMenu} name="close"></ion-icon>
            {
                logedUser
                ?<div className="menuLogBar">
                    <img src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"/>
                    <span>Elvi Miraka</span>
                    <Link to="/hyr" className="links">
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