import React from 'react';
import './App.css';
import Header from "./components/header/Header";
//import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from "react";
import Gamelist from "./components/Gamelist.jsx";


function App() {

//  const [title, setTitle] = useState('Game')
  
  //const name = setTitle('React game')


  return (
<>
    <Header />
    <main className="flex flex-col justify-center items-center h-screen">

      coucou 2
      <div>
      <Gamelist />
    </div>
    </main>
</>
  );
}

export default App;
