import React from 'react';
import { GameList } from '../components/GameList';
import { Header } from '../components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GameDetails from '../components/GameDetails';

function App() {
  return (
    <main>
      {' '}
      <Header name="React Games" />
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </main>
  );
}

export default App;
