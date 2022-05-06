import React from 'react'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <div>
      <div><Navbar/></div>
    <div className='flex flex-col justify-center items-center'>
      
        <h1 className="welcome">
            WELCOME IN WILD GAMES !
        </h1>
    </div>
    </div>
  )
}
