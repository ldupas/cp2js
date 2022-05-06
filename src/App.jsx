import React from 'react';

import logo from './logo.png';
import './App.css';
import Header from './Header';
import GameList from "./GameList"
import GameDetails from './GameDetails';
import { useState } from 'react/cjs/react.production.min';
import { Router, Routes, Route } from 'react-router-dom';

const App = () => {
const [name, setName] = useState('react_game');

  return (
    <Router >
    <div>

    <Header name={name}/>

    <GameList />

    <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
          
    </Routes>
    

    </div>
    </Router>
  );
}

export default App;
