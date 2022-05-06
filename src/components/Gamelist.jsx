import './Gamelist.css';
import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import Game from "./Game.jsx";

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const Gamelist = () => {

    const [games, setGames] = useState([])

   // GESTION API
   const url = "https://apis.wilders.dev/wild-games/games/";

   useEffect(() => {
     axios
       .get(url)
         .then(res => res.data)
         .then(data => setGames(data)) 
   }, []);


const gamesRating = () => {
    
}

  return (
    <>
      <div>
        <div>
            { games &&
            games.map((game) => (
              <Game game={game} />
            ))}
          </div>
          <button onClick={gamesRating}>

          </button>
      </div>
    </>
  )
}

export default Gamelist