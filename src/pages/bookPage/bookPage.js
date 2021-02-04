import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import * as notificationActions from '../../store/actions/notification';
import URL from '../../components/url';
import './bookPage.css';


const LazyBookPage = props => {
    return(
        <div className="bookPageHolder">
            <div className="bookPageCoverHolder">
                <div className="bookPageImageHolder"></div>
                <div className="bookPageActionHolder"></div>
            </div>
            <div className="bookPageDetailsHolder">
                <div className="bookPageSubDetailsHolder">
                    <div className="bookPageTitleHolder"></div>
                    <div className="bookPageSubDetailHolder"></div>
                    <div className="bookPageSubDetailHolder"></div>
                    <div className="bookPageSubDetailHolder"></div>
                    <div className="bookPageSubDetailHolder"></div>
                </div>
                <div className="bookPageDescriptionHolder"></div>
            </div>
        </div>
    )
}

const BookPage = props => {
    let { id } = useParams();
    const [book, setBook] = useState({});
    
    useEffect(()=>{
        fetch(`${URL}/book?id=${id}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json()).then(data =>{
            console.log(data)
           setBook(data.data.book[0]);
        });
    }, [id])

    const dispatch = useDispatch();

    return(
        <div className="book-screen">
            {
                book.title !== undefined?
                <div className="book-info">
                    <div className="book-cover">
                        <img alt="book" src={book.imgcover} />
                        <p 
                            onClick={()=>{
                                dispatch(cartActions.addToCart(book)); 
                                dispatch(notificationActions.displayNotification({message: `${book.title} u shtua ne shporte`, priority: 'white'}))}}
                        >
                            Shto ne shporte
                        </p>
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
                :<LazyBookPage />
            }
        </div>
    )
}

export default BookPage;