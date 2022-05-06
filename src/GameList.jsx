import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
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

  return (
    <div>
        <ul>
            {games && 
            games.filter((game) => {
                return ((game.rating > 4.5))
            })
            .map((game) =>
            <div key={game.id}>
            <Game game={game}
                  name={game.name}
                  released={game.released}
                background_image={game.background_image}
                rating={game.rating}
            />
            </div>
            )}
        </ul>
    </div>
  )}

export default GameList