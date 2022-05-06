import React from 'react'
import { Navbar } from '../components/Navbar'
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';




export const Home = () => {

  const [games, setGames] = useState([]);
    const url = 'https://apis.wilders.dev/wild-games/games/';
  
    useEffect(() => {
      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setGames(data));
    }, []);

  return (
    <div>
      <div><Navbar/></div>
    <div className='flex flex-col justify-center items-center'>
      
        <h1 className="welcome">
            WELCOME IN WILD GAMES !
        </h1>
        <img src="https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg" alt="a" className="gameImg  h-full object-cover mt-8"/>
    </div>
    </div>
  )
}
