import React from 'react';
import { Link } from "react-router-dom";

function Home(){ 
        return (
        <div className='GameMenu'>
                <h1 align="center">
						<div className='print-image' align='center'>
							<img src={'img/logo.png'} width='120' height='auto'/>
						</div>
                        NutraByte Games</h1>
                <div className='GameMenuList'>
                        <Link to="/SimpleQuiz" className='GameMenuButton'>Simple Quiz Game&nbsp;<i class="fa-solid fa-arrow-right fa-2xl"></i></Link>
                        <Link to="/CalorieGame" className='GameMenuButton'>Calorie Guessing Game&nbsp;<i class="fa-solid fa-arrow-right fa-2xl"></i></Link><br/>
                        <Link to="/FoodLabelGame" className='GameMenuButton'>Food Label Game &nbsp;<i class="fa-solid fa-arrow-right fa-2xl"></i></Link>
                        <Link to="/" className='GameMenuButton'><em>Coming Soon!</em></Link>
                </div>
        </div>
        ); 
} 

export default Home;