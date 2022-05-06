import React from 'react'
import Game from './Game'
import axios from 'axios'
import { useEffect, useState } from 'react/cjs/react.production.min'

function GameList() {

const [gameInfo, setGameInfo] = useState([]);

useEffect(() => {
    axios
    .get('https://apis.wilders.dev/wild-games/games')
    .then((res) => res.data)
    .then((data) => {setGameInfo(data);
    }, [])

  return (
     <div>
    
    <div>GameList</div>
<div>
  {gameInfo.map((element, index) => (
<Game key={index} name={element.name} rating={element.rating} image={element.background_image} /> 
     ))} 
</div>

    </div>

)});


export default GameList