import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './searchComponent.css';
import URL from '../url';

const SearchComponent = props => {
    const [searchedTitle, setSearchedTitle] = useState("");
    const [books, setBooks] = useState([]);
    let searchedBooks = [];
    if(searchedTitle.length === 3 && books.length < 1){
        fetch(`${URL}/title?title=${searchedTitle}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json()).then(data =>{
            console.log(data)
           setBooks(data.data.searchedBooks);
        });
    }
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
    const deleteBooks = () => {
        if(searchedTitle.length < 3) setBooks([]);
    }

    return(
        <div onClick={(e) => onClose(e)} className="searchComponent">
            <div className="searchContainer">
                <input autoComplete="off" autoFocus={true} name="input" onChange={(e)=> {setSearchedTitle(e.target.value); deleteBooks()}} className="searchTitlesInput" type="text" />
                <div name="book" className="booksResultsContainer">
                    {
                        searchedBooks.slice(0,3).map(book => {
                            return <Link to={`/book/${book._id}`} style={{width: '100%', color: 'black', textDecoration: 'none' }}>
                                <div className="bookResultContainer">
                                    <img className="bookResultImage" alt="bookImg" src={book.imgcover} />
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