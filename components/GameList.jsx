import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Game from './Game';

export const GameList = () => {
  const [games, setGames] = useState([]);

  const url = 'https://apis.wilders.dev/wild-games/games/';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGames(data));
  }, []);
  return (
    <div>
      {games &&
        games.map((game) => (
          <div key={game.id}>
            <Game game={game} />
          </div>
        ))}
    </div>
  );
};
export default GameList;
