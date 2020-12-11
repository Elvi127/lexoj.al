import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import BookCard from '../../components/bookCard/bookCard';
import Pagination from '../../components/pagination/pagination';
import './browseBooks.css';

const BrowseBooks = props => {
    const [categoriesOpen, openCategories] = useState(false);
    const [page, setPage] = useState(1);
    const books = useSelector(state => state.books.books);
    const categories = [
        'Roman',
        'Perralle',
        'Novele',
        'Fantashkence',
        'Historik',
        'Klasike',
        'Shkencor',
        'Biografi',
    ]
    return(
        <div className="browse-screen">
            <div className="categories-triggers">
                <p onClick={()=>openCategories(false)}>Te gjithe</p>
                <p onClick={()=>openCategories(true)}>Kategorite</p>
            </div>
            {
                categoriesOpen?
                <div className="categories-container">
                    {
                        categories.map((category, i)=>{
                            return <p className="category">{category}</p>
                        })
                    }
                </div>
                :null
            }
            <div className="books-container">
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
            <Pagination page={page} onPress={setPage} />
        </div>
    )
}

export default BrowseBooks;