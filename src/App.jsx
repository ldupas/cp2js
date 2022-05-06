import React from 'react';
import Header from './Header';
import GameList from './GameList';
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <div>
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="text-center p-4 pb-8">
        <GameList />
      </div>
    </main>
    </div>
    </div>
  );
}

export default App;
