import './Game.css';
import React from "react"
import GameDetails from "./GameDetails.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
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
            <button onClick={detail}>Détail</button>
            {/*
            <Link to="/games/">
            <h3 className="text-absolute">Détail2</h3>
                <a href="">
                {" "}
                </a>
  </Link>*/}
            {afficheDetail &&
              <GameDetails game={game} />
            }
        </div>
    </>
  )
}

export default Game