import React from 'react';
import { Game } from './Game';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export const GameList = () => {
  const [games, setGames] = useState([]);
//   const [deleteGame, setDeleteGame] = useState(false);

  const url = 'https://apis.wilders.dev/wild-games/games/';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGames(data));
  }, []);

  const [bestOnly, setBestOnly] = useState(false);

  const onlyTheBest = () => {
    setBestOnly(!bestOnly);
    console.log(bestOnly);
  };

  return (
    <div
      >
        <Navbar/>
        <div className="gameList
      flex flex-col justify-center items-center my-12 gap-8">
        <h2>GAMELIST</h2>
      <button onClick={onlyTheBest}
      className='btn
      '
      >Show  {bestOnly ?'All' : 'Best'  }</button>
      
      <div className="">
        {games &&
          games
            .filter((game) => !bestOnly || game.rating > 4.5)
            .map((game, index) => (
              <div key={index}>
                <Game game={game} />
              </div>
            ))}
      </div>
      </div>
    </div>
  );
};
