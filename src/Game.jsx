import React from 'react'
import { Link } from 'react-router-dom';

function Game({name, rating, background_image}) {
  return (
      <div>
    <div>
        
        <h1>{name}</h1>
        <h2>{rating}</h2>
        <img src={background_image} alt="game" />
    
    </div>
    <Link to="/games/:id">
    <button> See the game details </button>
    </Link>
        </div>
  )
}

export default Game