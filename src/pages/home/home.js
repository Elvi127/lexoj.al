import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './home.css';
import Menu from '../../components/menu/menu';
import HomeSection from '../../components/homeSections/homeSection';
import Baner from './baner.png';

const Home = props => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const books = useSelector(state => state.books.books);
    const sections = [
        {
            direction: 'col',
            title: 'Librat e fundit',
            subtitle: 'Lexo librat e sapo shtuar',
            contentType: 'carousel',
            content: books
        },
        {
            direction: 'row',
            title: 'Lexo Kudo',
            subtitle: 'Lexo nga kompjuteri, tableti ose celulari juaj',
            contentType: 'image',
            content: Baner
        },
    ]
    return(
        <div>
            <div className="home-banner">
                <div className="mobileMenu">
                    <ion-icon onClick={()=>setMenuOpen(true)} name="grid"></ion-icon>
                    <Menu closeMenu={()=>setMenuOpen(false)} visible={isMenuOpen} />
                </div>
                <p className="banner-title">Lexo pa limit</p>
                <Link to='/shfleto' style={{ textDecoration: 'none' }}>
                    <p className="banner-action">Shfleto librat</p>
                </Link>
            </div>
            <div>
                {
                    sections.map(section => 
                        <HomeSection 
                            section={section}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home;