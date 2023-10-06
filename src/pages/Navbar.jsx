import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
function Navbar(){  

    return (
    <nav>
        <h3>Navbar</h3>     
        <ul>         
            <li><Link to="/">Home</Link></li>         
        </ul>    
    </nav>
    ); 
} 
export default Navbar; 