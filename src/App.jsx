/* eslint-disable prettier/prettier */
import React from 'react';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import './App.css'

function App() {
  return (
    <>
      <Header name='Super checkpoint'/>
      <Routes>
        <Route path='/' element={<GameList />} />
        <Route path='/games/:id' element={<GameDetails />} />
      </Routes>
    </>
  );
}

export default App;
