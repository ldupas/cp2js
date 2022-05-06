import React from 'react';
import Game from './Game';

const Filtration = ({setActiveFiltration, filtres, activeFiltration}) => {
    console.log(filtres)
  return (
    <div>
        <select 
              value={activeFiltration}
              onChange={(e) => setActiveFiltration(e.target.value)}
      >
        <option value=''>Filtre par notation</option>
      {filtres.map((filtre) => (
        <option key={filtre} value={filtre}>
              {filtre}
        </option>
      ))}
      </select>
      <button onClick={() => setActiveFiltration('')}>Reset</button>
    </div>
  )
}

export default Filtration