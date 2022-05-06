import React from 'react'
import { Link } from 'react-router-dom'

export const Game = ({game}) => {
  return (
    <div className='game
    flex flex-row items-center justify-center
    w-full'>

<div className="descrip
flex flex-col justify-center 
w-6/12
m-8">

<Link to={`/game/${game.id}`}><h2 className='text-coral-color-secondary'>{game.name}</h2></Link>
<span>release: {game.released}</span>
<span>rating: {game.rating}</span>
<span><button 
className='btn2 my-4'>Remove</button></span>

</div>

<Link to={`/game/${game.id}`} className='gameImg
w-6/12 object-cover
m-8
border-4 border-dashed border-coral-color-secondary'>
    <img src={game.background_image} alt={game.name}
/></Link>

    </div>
  )
}
