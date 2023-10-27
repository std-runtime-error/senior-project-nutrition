import React from 'react';
import { Link } from "react-router-dom";

function Home(){ 
        return (
        <div className='GameMenu'>
                <h1 align="center">
                        <i class="fa-solid fa-chess"></i>
                        <br/>
                        Game Menu</h1>
                <div className='GameMenuList'>
                        <Link to="/SimpleQuiz" className='GameMenuButton'>Simple Quiz Game&nbsp;<i class="fa-solid fa-arrow-right fa-2xl"></i></Link>
                        <Link to="/CalorieGame" className='GameMenuButton'>Calorie Guessing Game&nbsp;<i class="fa-solid fa-arrow-right fa-2xl"></i></Link><br/>
                        <Link to="/" className='GameMenuButton'><em>Coming Soon!</em></Link>
                        <Link to="/" className='GameMenuButton'><em>Coming Soon!</em></Link>
                </div>
        </div>
        ); 
} 

export default Home;