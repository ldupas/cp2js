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
        <div>
          <h2>{game.id}</h2>
          <p>{game.released}</p>
        </div>
    </>
  )
}

export default GameDetails