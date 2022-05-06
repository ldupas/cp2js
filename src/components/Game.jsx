import './Game.css';
import React from "react"

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const Game = ({ game }) => {


  return (
    <>
        <div>
            <h2>{game.name}</h2>
            <p>{game.rating}</p>
            <img className="game-img" alt={game.name} src={game.background_image} />
        </div>
    </>
  )
}

export default Game