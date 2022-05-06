import React from 'react';
import "./Header.css"

const Header = (props) => {
  return (
   
    <h1 className= "Header-title">Welcome, {props.name} in React game </h1>
  )
}

export default Header;