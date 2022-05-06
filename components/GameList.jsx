import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Game from './Game';

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [showRaiting45, setShowRating45] = React.useState(false);

  function handleShowRating45Click() {
    setShowRating45(!showRaiting45);
  }

  const url = 'https://apis.wilders.dev/wild-games/games/';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGames(data));
  }, []);

  return (
    <div>
      {' '}
      <button onClick={handleShowRating45Click}>{showRaiting45 ? 'ON' : 'OFF'}Show rating is above 4.5</button>
      {games
        .filter((game) => !showRaiting45 || game.rating > 4.5)
        .map((game) => (
          <div key={game.id}>
            <Game game={game} />
          </div>
        ))}
    </div>
  );
};
export default GameList;
