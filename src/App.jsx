import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { GameList } from './components/GameList';
import { Home } from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { GameDetails } from './components/GameDetails';
import { Router } from 'react-router';

const name = 'REACT GAME';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamelist" element={<GameList />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
