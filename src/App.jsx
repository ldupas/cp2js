import React from 'react';

import logo from './logo.png';
import './App.css';
import Header from './Header';
import { useState } from 'react/cjs/react.production.min';

function App() {
const [name, setName] = useState('react_game');

  return (
    <div>

    <Header name={name}/>
  
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="text-center p-4 pb-8">
        <img src={logo} width="20%" alt="WCS logo" className="my-0 mx-auto" />
      </div>
      <div className="text-center p-4 pb-8">
        <p>Welcome to your fresh, lightweight, React App ! &#127752;</p>
      </div>
      <div className="text-center p-4 pb-8">
        <p>
          Start in the <code>App.jsx</code> component !
        </p>
      </div>
    </main>

    </div>
  );
}

export default App;
