import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    // Before
    // const { removeBook } = useContext(BookContext);

    // After with reducer
    const { dispatch } = useContext(BookContext);

    return ( 
        // Before
        // <li onClick={() => removeBook(book.id)}>

        // After with reducer
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author}</div>
        </li>
    );
}
 
export default BookDetails;