import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Context in class component

// class BookList extends Component {
//     // 1. Context Type
//     static contextType = ThemeContext;

//     render() { 
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
        
//         return (  
//             <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>The way of kings</li>
//                     <li style={{ background: theme.ui }}>The name of the wind</li>
//                     <li style={{ background: theme.ui }}>The final empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }

// Hook + Context in a functional component
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>The way of kings</li>
                <li style={{ background: theme.ui }}>The name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
            </ul>
        </div>
    );
}

export default BookList;