import React from 'react'

function Game({name, rating, background_image}) {
  return (
    <div>
        
        <h1>{name}</h1>
        <h2>{rating}</h2>
        <img src={background_image} alt="game" />
    
    </div>
  )
}

export default Game