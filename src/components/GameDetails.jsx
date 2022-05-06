import './GameDetails.css';
import React from "react"
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

const GameDetails = () => {

  const [game, setGame] = useState([]);
  let { id } = useParams();

  const url = 'https://apis.wilders.dev/wild-games/games/' + id;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setGame(data));
  }, [id]);


  return (
    <>
        <div className='detail_Container'>
          <h2>{game.name}</h2>
          <img className="game-img-detail" alt={game.name} src={game.background_image} />
          <h3>ID = {game.id}</h3>
          <p>Rating = {game.rating}</p>
          <p>Relased = {game.released}</p>
        </div>
    </>
  )
}

export default GameDetails