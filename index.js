import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import GameMenu from "./pages/GameMenu";
import App from "./pages/App";

export default function App() {   
  return (     
      <BrowserRouter>       
          <Routes>         
              <Route path="/" element={<Layout />}>           
              <Route index element={<GameMenu />} />                     
              <Route path="app" element={<App />} />              
              </Route>       
          </Routes>     
      </BrowserRouter>   
  ); 
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);