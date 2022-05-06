import './Gamelist.css';
import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import Game from "./Game.jsx";

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const Gamelist = () => {

   const [games, setGames] = useState([])
   const [filterGames, setFilterGames] = useState(false)


    // GESTION API
   const url = "https://apis.wilders.dev/wild-games/games/";

   useEffect(() => {
     axios
     .get(url)
       .then((res) => res.data)
       .then((data) => setGames(data));
   }, []);

const gamesRating = () => {
    setFilterGames(!filterGames)
}


  return (
    <>
      <div>
         <button onClick={gamesRating}>Filtrer</button>
        <div>
            { games &&
            games.filter((game) => !filterGames || game.rating > 4.5).map((game) => (
              <Game game={game} />
            ))}
          </div>
      </div>
    </>
  )
}

export default Gamelist