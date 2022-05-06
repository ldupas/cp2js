import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import Game from './Game';

const GameList = () => {
  const [gameList, setGameList] = useState();
  const url = 'https://apis.wilders.dev/wild-games/games/'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGameList(data))
  }, []);

  return (
    <div>
      <div className='flex justify-center flex-wrap gap-5 mt-10'>
        {gameList &&
          gameList.map((game) => (
            <div key={game.id}>
              <Game game={game}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameList;
