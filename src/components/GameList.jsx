/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Game from './Game'
import './GameList.css'

function GameList() {

  const [gamesList, setGamesList] = useState([]);
  const API_URL = "https://apis.wilders.dev/wild-games/games/"

  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setGamesList(data);
    })
  },[]);

  return (
    <div className='gameslist-container'>
      <ul className='gamelist-ul'>
      {gamesList.map((game) => {
          return (
            <li key={game.id}>
            <Game data={game} />
            </li>
          )
      })}
      </ul>
    </div>
  )
}

export default GameList