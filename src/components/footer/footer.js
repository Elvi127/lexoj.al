import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

const directs = [
    {
        name: "Na Kontaktoni",
        to: "/kontakte"
    },
    {
        name: "Rreth Nesh",
        to: "/rreth-nesh"
    },
    {
        name: "Privatesia",
        to: "/privatesia"
    },
    {
        name: "Transporti",
        to: "/transporti"
    },
    {
        name: "Lista e Librave",
        to: "/librat"
    },

]

const Footer = props => {
    return(
        <div className="footer">
            <p className="copyright">© Copyright 2020 Lexoj.al</p>
            <div className="directions">
                {
                    directs.map(direct => <Link to={direct.to} style={{ textDecoration: 'none', color: 'black' }}>
                        <p>{direct.name}</p>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default Footer;