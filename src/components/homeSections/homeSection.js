import React from 'react';
import './homeSection.css';
import BookCard from '../bookCard/bookCard';

const HomeSection = props => {

    const section = props.section;

    return(
        <div className={`books-Section ${section.direction}`}>
            <div>
                <p className="section-h">{section.title}</p>
                {
                    section.subtitle?
                    <p className="section-p">{section.subtitle}</p>
                    :null
                }
            </div>
            {
                section.contentType === 'carousel'?
                <div className="books-container-home">
                    {
                        section.content.map((book, i)=>{
                            return <BookCard 
                                    title={book.title}
                                    author={book.author}
                                    views={book.views}
                                    img={book.img}
                                />
                        })
                    }
                </div>
                :<img alt="banner" src={section.content} />
            }
        </div>
    )
}

export default HomeSection;