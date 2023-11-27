import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import GameMenu from "./pages/GameMenu";
import SimpleQuiz from './pages/SimpleQuiz';
import CalorieGame from './pages/CalorieGame';
import FoodLabelGame from './pages/FoodLabelGame';

export default function App() { 

  return (
    <div>
      <BrowserRouter>
                  <Routes>         
                  <Route path="/" element={<Layout />}>           
                  <Route index element={<GameMenu />} />  
                  <Route path="simplequiz" element={<SimpleQuiz />} />
                  <Route path="caloriegame" element={<CalorieGame />} />
                  <Route path="foodlabelgame" element={<FoodLabelGame />} />
                  </Route>       
                  </Routes>  
      </BrowserRouter>  
    </div>
  ); 
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
