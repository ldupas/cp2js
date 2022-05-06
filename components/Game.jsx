import React from 'react';
import './Game.css';

export const Game = ({ game }) => {
  return (
    <div>
      <div>
        <div className="container-img">
          {' '}
          <img className="img-games" src={game.background_image} alt={game.name} />
        </div>

        <div>
          <div className="container-game">
            <h2>{game.slug}</h2>
            <h3>{game.released}</h3>
            <h4>{game.rating}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
