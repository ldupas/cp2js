import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import { GameList } from './GameList';
import { Game } from './Game';
import axios from 'axios';
import { Navbar } from './Navbar';

export const GameDetails = () => {
  const [game, setGamez] = useState([]);
  let { id } = useParams();

  const url = 'https://apis.wilders.dev/wild-games/games/' + id;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGamez(data));
  }, [id]);

  return (
    <div className='bg'>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="my-4">{game.name}</h2>
          <span>release: {game.released}</span>
          <span>rating: {game.rating}</span>
        </div>
        
            {/* <h1>genre: {game.genres[0]} {console.log(game.genres[0])}</h1> */}
        

        <img
          src={game.background_image}
          alt={game.name}
          className="gameImg
    w-full object-cover
    mt-8"
        />
      </div>
    </div>
  );
};
