import React, {useState} from 'react';
import './profile.css';
import {useSelector} from 'react-redux';
import BookCard from '../../components/bookCard/bookCard';


const Profile = props => {
    const books = useSelector(state => state.books.books);
    const [isEditAccountOpen, setEditAccountOpen] = useState(false);
    const toggleEditAccount = () =>{
        if(isEditAccountOpen) setEditAccountOpen(false)
        else setEditAccountOpen(true)
    }
    return(
        <div className="accountPage">
            <div className="accountLeft">
                <div className="accountInfo">
                    <div className="userDetails">
                        <img alt="userimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCbQsmw9KpoBCi4Yabq8oau1Ksx3U8rmJBA&usqp=CAU"/>
                        <p>Elvi Miraka</p>
                        <div onClick={toggleEditAccount} className="userMore">
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                        </div>
                        {
                            isEditAccountOpen?
                            <div className="accountSettings">
                                <p>Ndrysho te dhenat</p>
                                <p>Ndrysho fjalekalimin</p>
                                <p>Ckycu</p>
                            </div>
                            :<div className="accountSettingsNone">
                                <p>Ndrysho te dhenat</p>
                                <p>Ndrysho fjalekalimin</p>
                                <p>Ckycu</p>
                            </div>
                        }
                    </div>
                    <div className="userOrderHistory">
                        <div className="orderHistoryCard">
                            <p className="cardTitle">Porosi ne pritje</p>
                            <p>0 porosi</p>
                        </div>
                        <div className="orderHistoryCard">
                            <p className="cardTitle">Te gjitha porosite</p>
                            <p>1 porosi</p>
                        </div>
                    </div>
                </div>
                <div className="booksSection">
                    <div className="section">
                        <p className="p">Te ruajtur</p>
                        <div className="booksSectionScroll">
                            {
                                books.map(book => {
                                    return <div>
                                                <BookCard 
                                                    title={book.title}
                                                    author={book.author}
                                                    views={book.views}
                                                    img={book.img}
                                                />
                                            </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="section">
                        <p className="p">Duke lexuar</p>
                        <div className="booksSectionScroll">
                            {
                                books.map(book => {
                                    return <div>
                                                <BookCard 
                                                    title={book.title}
                                                    author={book.author}
                                                    views={book.views}
                                                    img={book.img}
                                                />
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="accountSettings"></div> */}
        </div>
    )
}

export default Profile;