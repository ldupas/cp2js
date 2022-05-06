import React from 'react';

import logo from './logo.png';
import './App.css';
import { Header } from './components/Header';
import { GameList } from './components/GameList';

const name = 'REACT GAME';

function App() {
  return (
  <div>
<Header name={name}/>
<GameList/>

  </div>
  );
}

export default App;
