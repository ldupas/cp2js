import React from 'react';

const Game = ({game}) => {
  return (
    <div>
        <ul>
            <li>
            <img src={game.background_image} alt={game.name} />
            <div> {game.name} {game.released} </div>
            <div> {game.rating} </div>
            </li>
        </ul>
    </div>
  )
}

export default Game