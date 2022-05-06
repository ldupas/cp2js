import './Game.css';
import React from "react"
import GameDetails from "./GameDetails.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";


const Game = ({ game }) => {

    const [afficheDetail, setAfficheDetail] = useState(false)

    const detail = () => {
        setAfficheDetail(!afficheDetail)
    }

  return (
    <>
        <div className='column'>
            <h2>{game.name}</h2>
            <p>{game.rating}</p>
            <img className="game-img" alt={game.name} src={game.background_image} />
{/*            <button onClick={detail}>Détail</button> */}
            <Link to={`/game/${game.id}`}><h2>{game.name}</h2></Link>
        </div>
    </>
  )
}

export default Game