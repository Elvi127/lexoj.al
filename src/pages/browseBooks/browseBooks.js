import React, {useState, useEffect} from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import BookCard from '../../components/bookCard/bookCard';
import Pagination from '../../components/pagination/pagination';
import BrowseBooksMap from '../../components/browseBooksMap/browseBooksMap';
import URL from '../../components/url';
import './browseBooks.css';

const nodes = [
    {
        key: 'Kategoria',
        value: 'Roman'
    },
    {
        key: 'Autori',
        value: 'Honoré de Balzac'
    }
]

const LazyBookCard = props => {
    return(
        <div className="bookCardHolder">
            <div className="imgHolder"></div>
            <div className="detailsHolder">
                <div className="titleHolder"></div>
                <div className="subdetailsHolder">
                    <div className="authorHolder"></div>
                    <div className="soldHolder"></div>
                </div>
            </div>
        </div>
    )
}

const BrowseBooks = props => {
    const [categoriesOpen, openCategories] = useState(false);
    const [page, setPage] = useState(1);
    const [books, setBooks] = useState([]);
    const [route, setRoute] = useState('/browse');
    const array = [0,0,0,0,0,0,0,0,0,0]
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

    const history = useHistory();
    let location = useLocation();
    const changePageUrl = (page)=> {
        if(location.search.includes("category=")){
            let url = location.search;
            let url_category = url.split('&')[0];
            url = url_category + `&page=${page}`
            history.push(`/shfleto${url}`); 
            setRoute(new Date());
            setBooks([])

        }else{
            let url = location.search;
            let url_category = url.split('?')[0];
            url = url_category + `page=${page}`
            history.push(`/shfleto?${url}`); 
            setRoute(new Date());
            setBooks([])
        }
    }
    useEffect(()=>{
        fetch(`${URL}/browse${location.search}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json()).then(data =>{
            console.log(data)
           setBooks(data.data.books);
        });
    }, [route])
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    return(
        <div className="browse-screen">
            <BrowseBooksMap nodes={nodes} />
            <div className="categories-triggers">
                <p onClick={()=>{openCategories(false);history.push(`/shfleto`); setRoute(new Date());setBooks([]);setPage(1)}}>Te gjithe</p>
                <p onClick={()=>openCategories(true)}>Kategorite</p>
            </div>
            {
                categoriesOpen?
                <div className="categories-container">
                    {
                        categories.map((category, i)=>{
                            return <p onClick={()=> {history.push(`/shfleto?category=${category}`); setRoute(new Date());setBooks([]);setPage(1)}} className="category">{category}</p>
                        })
                    }
                </div>
                :null
            }
            <div>
                {
                    books.length > 0?
                    <div className="books-container">
                        {
                            books.map((book, i)=>{
                                return <BookCard 
                                    title={book.title}
                                    author={book.author}
                                    views={500}
                                    img={book.imgcover}
                                    id={book._id}
                                />
                            })
                        }
                    </div>
                    :<div className="books-container">
                        {
                            array.map(a => <LazyBookCard />)
                        }
                    </div>
                }
            </div>
            <Pagination page={page} onPageChange={changePageUrl} lastPage={books.length>0 && books.length<4} onPress={setPage} />
        </div>
    )
}

export default BrowseBooks;