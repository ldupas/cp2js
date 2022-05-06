import React from 'react'
import Game from './Game'
import axios from 'axios'
import { useEffect, useState } from 'react'

const GameList = () => {

const [showGoodRating, setShowGoodRating] = useState(false);
const [gameInfo, setGameInfo] = useState([]);

const BestRating = () => {
    setShowGoodRating(!showGoodRating);
};

useEffect(() => {
    axios
    .get('https://apis.wilders.dev/wild-games/games')
    .then((res) => res.data)
    .then((data) => {setGameInfo(data);
    }, [])

  return(
     <div>
     <div>GameList</div>
        <div>
        {gameInfo.map((element, index) => (
        <Game key={index} name={element.name} rating={element.rating} image={element.background_image} /> 
            ))} 
        </div>

        <button onClick={BestRating}> Show Best Rating Games Only : {showGoodRating ? 'ON' : 'OFF'} </button>

        <div>
        {gameInfo.filter((game) => !showGoodRating || game.rating > 4.5)
        .map((element, index) => (
        <Game key={index} name={element.name} rating={element.rating} image={element.background_image} /> 
            ))} 
        </div>   
</div>
);
}
)

};


export default GameList