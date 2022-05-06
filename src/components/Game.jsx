/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import React from 'react'
import './Game.css'
import { useNavigate } from 'react-router-dom'

function Game({data}) {

  const navigate = useNavigate();

  const displayDetails = () => {
    navigate(`/games/${data.id}`);
  }

  return (
    <div 
    onClick={displayDetails}
    className='game-container'>
    <div className='game-img'>
      <img src={data.background_image} alt='image'/>
    </div>
    <div className='game-info'>
      <div className='game-title'>
        {data.name}
      </div>
      <div className='game-release'>
        {data.released}
      </div>
    </div>

    </div>
  )
}

export default Game