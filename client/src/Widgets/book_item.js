import React from 'react';
import {Link} from  'react-router-dom';

const Book_item = (item) => {

    return (
        <div>
            <Link to={`/books/${item._id}`} className="book_item">
                <div className="book_header">
                    <h2>{item.name}</h2>
                </div>
                <div className="book_items">
                    <div className="book_author">{item.author}</div>

                    <div className="book_bubble">
                        <strong>Price: </strong>  N{item.price}
                    </div>
                    <div className="book_bubble">
                        <strong>Price: </strong>  N{item.pages}
                    </div>
                    <div className="book_bubble rating">
                        <strong>Price: </strong>  N{item.rating}
                    </div>
                </div>
                 
            </Link>
        </div>
    );
};

export default Book_item;