import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Game from './Game';

const GameList = () => {
  const [gameList, setGameList] = useState();
  const [clicked, setClicked] = useState(false);
  const url = 'https://apis.wilders.dev/wild-games/games/';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGameList(data));
  }, []);

  return (
    <div>
      <div className="flex justify-center m-5">
        <button onClick={(e) => setClicked(!clicked)} className="bg-purple-600 p-4 rounded-md flex justify-center text-white">Filter Rating > 4.5 : {clicked ? 'ON' : 'OFF'}</button>
      </div>
      <div className="flex justify-center flex-wrap gap-5 mt-8">
        {clicked ?
        gameList &&
          gameList
            .filter((game) => game.rating > 4.5)
            .map((game) => (
              <div key={game.id}>
                <Game game={game} />
              </div>
            ))

        : gameList &&
          gameList.map((game) => (
            <div key={game.id}>
              <Game game={game} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameList;
