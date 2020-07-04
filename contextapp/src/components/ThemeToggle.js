import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Context in a class component 
// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
    
//     render() { 
//         const { toggleTheme } = this.context;
//         return ( 
//             <button onClick={toggleTheme}>Toogle the theme</button>
//         );
//     }
// }

// Context in a functional component 
const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme}>Toogle the theme</button> 
    );
}
 
export default ThemeToggle;