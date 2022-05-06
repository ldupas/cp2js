import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navBar w-screen h-12 fixed top-0' >
      <ul className='nav
    flex flex-row justify-center items-center gap-16 
    w-full h-full  
    text-2xl'>
        <NavLink to="/" className="hover:bg-coral-color-text hover:text-coral-color-secondary h-full flex items-center">
          <li className='mx-4'>Home</li>
        </NavLink>
        <NavLink to="/gamelist" className="hover:bg-coral-color-text hover:text-coral-color-secondary h-full flex items-center" >
          <li className='mx-4' >Gamelist</li>
        </NavLink>
      </ul>
    </div>
  );
};
