/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.production.min';

function GameDetails() {

  const { gameId } = useParams();
  const [data, setData] = useState([]);
  const API_URL = `https://apis.wilders.dev/wild-games/games/${gameId}`;

  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setData(data);
    })
  },[]);

  console.log('data',data)

  return (
    <div>
      <div>
        {data.name}
      </div>
    </div>
  )
}

export default GameDetails