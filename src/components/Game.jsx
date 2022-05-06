import React from 'react'

export const Game = ({game}) => {
  return (
    <div className='game
    flex flex-row items-center justify-center
    w-full'>

<div className="descrip
flex flex-col justify-center 
w-6/12
m-8">

<h2>{game.name}</h2>
<span>release: {game.released}</span>
<span>rating: {game.rating}</span>

</div>

<img src={game.background_image} alt={game.name}
className='gameImg
w-6/12 object-cover
m-8'/>

    </div>
  )
}
