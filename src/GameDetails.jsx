import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function GameDetails() {

    const [gameDetails, setGameDetails] = useState([]);

    useEffect(() => {
        axios
        .get('https://apis.wilders.dev/wild-games/games')
        .then((res) => res.data)
        .then((data) => {setGameDetails(data);
        }, [])

  return (
    <div>
        <h1>Games Details</h1>
<div>
  <h2>{gameDetails.name}</h2>
  <h2>{gameDetails.genres.slug}</h2>
  <h2>{gameDetails.short_screenshots.image}</h2>
  <h2>{gameDetails.clip.clips.full}</h2>

</div>
    </div>
  )
})};

export default GameDetails