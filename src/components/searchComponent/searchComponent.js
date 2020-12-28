import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './searchComponent.css';

const SearchComponent = props => {
    const [searchedTitle, setSearchedTitle] = useState("");
    const books = useSelector(state => state.books.books);
    let searchedBooks = [];
    if(searchedTitle.length > 2){
        searchedBooks = books.filter(book => {
            return book.title.toLowerCase().includes(searchedTitle.toLowerCase());
        })
    }

    const onClose = (e) => {
       if(e.target.name === "input" || e.target.name === "book"){
        return
       }else{
           console.log(e.target)
           props.onClick()
       }
    
    }

    return(
        <div onClick={(e) => onClose(e)} className="searchComponent">
            <div className="searchContainer">
                <input autoComplete="off" autoFocus={true} name="input" onChange={(e)=> setSearchedTitle(e.target.value)} className="searchTitlesInput" type="text" />
                <div name="book" className="booksResultsContainer">
                    {
                        searchedBooks.slice(0,3).map(book => {
                            return <Link to={`/book/${book.title}`} style={{width: '100%', color: 'black', textDecoration: 'none' }}>
                                <div className="bookResultContainer">
                                    <img className="bookResultImage" alt="bookImg" src={book.img} />
                                    <p className="bookResultTitle">{book.title}</p>
                                    <p className="bookResultAuthor">{book.author}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchComponent;