import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Home(){ 
        return (
        <div className='GameMenu'>
                <h1 align="center" >Game Menu Page</h1>
                <Link to="/SimpleQuiz">Simple Quiz Game</Link> <br />
                <Link to="/">Another Game</Link> <br />
                <Link to="/">Another Game</Link> <br />
                <Link to="/">Just Tons of Games</Link> <br />
        </div>
        ); 
} 

export default Home;