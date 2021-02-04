import React from 'react';
import './bookCard.css';
import {Link} from 'react-router-dom';

const BookCard = props => {
    let url = `/book/${props.id}`;
    return(
        <Link to={url} style={{ textDecoration: 'none' }}>
            <div className='book-card'>
                <img alt="bookcard" src={props.img} />
                <div className='card-details'>
                    <p className='card-title'>{props.title}</p>
                    <div className='card-subdetails'>
                        <p className='card-author'>{props.author}</p>
                        <div className='card-views'>
                            <p className='card-icon'><ion-icon name="cart-sharp"></ion-icon></p>
                            <p>{props.views}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BookCard;