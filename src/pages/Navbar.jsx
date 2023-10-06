import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
function Navbar(){  

    return (
    <nav className="NavigationBar">
        <h3>Navigation Bar</h3>     
        <ul>         
            <li><Link to="/">Games</Link></li>         
        </ul>    
    </nav>
    ); 
} 
export default Navbar; 