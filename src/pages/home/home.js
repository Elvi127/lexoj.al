import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './home.css';
import BookCard from '../../components/bookCard/bookCard';
import Baner from './baner.png';

const Home = props => {
    const books = useSelector(state => state.books.books);

    return(
        <div>
            <div className="home-banner">
                <p className="banner-title">Lexo pa limit</p>
                <Link to='/lexoj.al/shfleto' style={{ textDecoration: 'none' }}>
                    <p className="banner-action">Shfleto librat</p>
                </Link>
            </div>
            <div>
               <div className="books-section">
                   <p className="section-h">Librat e fundit</p>
                   <p className="section-p">Lexo librat e sapo shtuar</p>
                   <div className="books-container-home">
                        {
                            books.map((book, i)=>{
                                return <BookCard 
                                        title={book.title}
                                        author={book.author}
                                        views={book.views}
                                        img={book.img}
                                    />
                            })
                        }
                   </div>
                   <div className="books-section section2">
                       <div>
                            <p className="section-h">Lexo Kudo</p>
                            <p className="section-p">Lexo nga kompjuteri, tableti ose celulari juaj.</p>
                       </div>
                       <img alt="banner" src={Baner} />
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Home;