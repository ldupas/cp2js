import React from 'react';
import './App.css';
import Header from "./components/header/Header";
//import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from "react";
import Gamelist from "./components/Gamelist.jsx";
import { Routes, Route } from "react-router-dom";
import GameDetails from './components/GameDetails';

function App() {

//  const [title, setTitle] = useState('Game')
  
  //const name = setTitle('React game')


  return (
<>
    <Header />
    
    <Routes>
        <Route path="/" element={<Gamelist />} />
        <Route path="/games/:id" element={<GameDetails />} />
    </Routes>
    <main className="flex flex-col justify-center items-center h-screen">
      <div>

    </div>
    </main>
</>
  );
}

export default App;
