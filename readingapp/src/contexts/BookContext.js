import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookreducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // Before 
    // const [ books, setBooks ] = useState([
    //     { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    //     { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    // ])

    // const addBook = (title, author) => {
    //     setBooks([ ...books, { title, author , id: v4() }]);
    // };

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // };

    // After with Reducer
    const [ books, dispatch ] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [ books ]);

    return (
        // Before
        // <BookContext.Provider value={{ books, addBook, removeBook }}>
        // After with reducer
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;