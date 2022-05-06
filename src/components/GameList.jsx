/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Game from './Game'
import './GameList.css'

function GameList() {

  const [gamesList, setGamesList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [refreshData, setRefreshData] = useState(false)
  const API_URL = "https://apis.wilders.dev/wild-games/games/"

  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setGamesList(data);
    })
  },[refreshData]);

  const handleRatingButton = () => {
    if (buttonClicked) { 
      setButtonClicked(false);
      setRefreshData(!refreshData);
    } else {
      const newArray = gamesList.filter((game) => game.rating >= 4.5);
      setGamesList(newArray)
      setButtonClicked(true)
    }
  }

  return (
    <div className='gameslist-container'>
    <div>
    <button 
    onClick={handleRatingButton}
    className='rating-button'>Filter by rating</button>
    </div>
      <ul className='gamelist-ul'>
      {gamesList &&
        gamesList.map((game) => {
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