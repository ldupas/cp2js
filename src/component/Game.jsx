import React from 'react';

const Game = ({ game }) => {
  return (
    <div>
      <h2 className='text-green-500 text-lg font-bold'>{game.name}</h2>
      <p className='text-yellow-400 text-l font-bold'>Rating : {game.rating}</p>
      <img className="w-80 h-60 mt-2 mb-10" src={game.background_image} alt={game.name} />
    </div>
  );
};

export default Game;
