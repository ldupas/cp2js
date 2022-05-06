import './GameDetails.css';
import React from "react"

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const GameDetails = ({ game }) => {


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