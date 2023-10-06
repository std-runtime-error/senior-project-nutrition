import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import GameMenu from "./pages/GameMenu";
import SimpleQuiz from './pages/SimpleQuiz';

export default function App() { 

  return (
    <div>
      <BrowserRouter>
                  <Routes>         
                  <Route path="/" element={<Layout />}>           
                  <Route index element={<GameMenu />} />  
                  <Route path="simplequiz" element={<SimpleQuiz />} />                                 
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