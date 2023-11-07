import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import ColorSwitcher from "./ColorSwitcher";
function Navbar(){  

    return (
    <div>
        <div className="NavigationBar" tabindex="0">
            <div className="NavigationIcon">
                <i class="fa-solid fa-bars fa-2xl"></i>
            </div>
            <div className="NavigationContents">
                <nav>
                    <h3>Navigation Bar</h3>     
                    <ul>         
                        <li><Link to="/">Games</Link></li>         
                    </ul> 
                </nav>
                <ColorSwitcher/> 
            </div>
        </div>

    </div>
    ); 
} 
export default Navbar; 