import React from 'react';
import './browseBooksMap.css';
import {Link} from 'react-router-dom';

const BrowseBooksMap = props => {
    return (
        <div className="linearMap">
            <Link to='/' style={{ textDecoration: 'none', color: 'gray', marginTop: '5px' }}>
                <ion-icon name="home-sharp"></ion-icon>
            </Link>
            <ion-icon style={{marginLeft: '10px', marginTop: '3px'}} name="chevron-forward-sharp"></ion-icon>
            <p>Shfleto Librat</p>
            {
                props.nodes.map(node => <p>{node.value}</p>)
            }
        </div>
    )
}

export default BrowseBooksMap;