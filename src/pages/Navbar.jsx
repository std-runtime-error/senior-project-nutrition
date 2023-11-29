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
					<h1 align="center">
						<div>NutraByte</div>
						<div className='print-image' align='center'>
							<img src={'img/logo.png'} width='120' height='auto'/>
						</div>    
						<br/>
                    	<Link to="/">Home</Link>         		
					</h1>
                </nav>
                <ColorSwitcher/> 
            </div>
        </div>

    </div>
    ); 
} 
export default Navbar; 