import React from 'react';
import './App.css';
import Header from './Header';
import GameDetails from './GameDetails';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import GameList from './GameList';

const App = () => {
const [name, setName] = useState('react_game');

  return (
    <div>
    <Header name={name}/>
    <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
    </Routes>

    </div>
  );
}

export default App;
