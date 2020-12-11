import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './bookPage.css';

const BookPage = props => {
    let { title } = useParams();
    let book = useSelector(state => state.books.books).filter((book) => book.title === title)[0];
    console.log(book)

    return(
        <div className="book-screen">
            <div className="book-info">
                <div className="book-cover">
                    <img alt="book" src={book.img} />
                    <p>Shto ne shporte</p>
                </div>
                <div className="book-details">
                    <p className="book-title">{book.title}</p>
                    <div>
                        <p className="book-detail">Autori<span>{book.author}</span></p>
                        <p className="book-detail">Publikuesi<span>{book.publisher}</span></p>
                        <p className="book-detail">Viti<span>{book.year}</span></p>
                        <p className="book-detail">Kategoria<span>{book.category}</span></p>
                        <p className="book-description">{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookPage;