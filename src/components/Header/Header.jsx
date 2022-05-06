/* eslint-disable prettier/prettier */
import React from 'react'
import './Header.css'

function Header({name}) {
  return (
  <div className="header">
    <div className="logo">{name}</div>
  </div> 
  )
}

export default Header