import React from 'react';
import { GameList } from '../components/GameList';
import { Header } from '../components/Header';

import './App.css';

function App() {
  return (
    <main className="container-primary">
      <Header name="React Games" />
      <GameList />
    </main>
  );
}

export default App;
