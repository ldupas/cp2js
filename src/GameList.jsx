import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filtration from './Filtration';
import Game from './Game';

const GameList = () => {
    const [games, setGames] = useState([]);

    const url = "https://apis.wilders.dev/wild-games/games/"

    useEffect(() => {
        axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setGames(data))
    }, []);

    const [activeFiltration, setActiveFiltration] = useState()
    const filtres = games.reduce(
        (acc, game) => 
        acc.includes(game.rating) ? acc : acc.concat(game.rating),
        []
    )

  return (
    <div>
        <Filtration
                filtres={filtres}
                setActiveFiltration={setActiveFiltration}
                activeFiltration={activeFiltration}
         />                  
        <ul>
            {games && 
            games
            .map((game) =>
            !activeFiltration || activeFiltration == game.rating ? (
            <div key={game.id}>
            <Game game={game}
                  name={game.name}
                  released={game.released}
                background_image={game.background_image}
                rating={game.rating}
            />
            </div>
            ) : null
            )}
        </ul>
    </div>
  )}

export default GameList


// .filter((game) => {
//     return ((game.rating > 4.5))
// })