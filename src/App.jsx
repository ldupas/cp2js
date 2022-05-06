import React from 'react';
import Header from './Header';
import GameList from './GameList';
import './App.css';

function App() {
  return (
    <div>
    <div>
    <Header />
    </div>
    <div>
      <div className="text-center p-4 pb-8">
        <GameList />
      </div>
    </div>
    </div>
  );
}

export default App;
