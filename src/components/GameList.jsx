import React from 'react'
import {Game} from './Game'
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

export const GameList = () => {

    const [games,setGames]= useState([]);

    const url = "https://apis.wilders.dev/wild-games/games/"
    
    useEffect(()=>{
        axios
        .get(url)
        .then((res)=> res.data)
        .then((data)=> setGames(data))
            },[])

  return (
    <div className='gameList
    '>

        <h2>GameList</h2>
        <div className=''>
            { games &&
            games
            .filter((game)=> game.rating >= 4.5)
            .map((game, index)=>(
              <div key={index}>
                  <Game game={game}/>
              </div>  
            ))}
            
        </div>



    </div>
  )
}
