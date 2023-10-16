import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
function Navbar(){  

    return (
    <div>
        <div className="NavigationIcon">
            <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
        <nav className="NavigationBar">
            <h3>Navigation Bar</h3>     
            <ul>         
                <li><Link to="/">Games</Link></li>         
            </ul>    
        </nav>
    </div>
    ); 
} 
export default Navbar; 