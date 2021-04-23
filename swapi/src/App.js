import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Starships from './components/Starships'

function App () {


  const [ships, setShips] = useState([])

  function fetchShips() {

    axios.get(`https://www.swapi.tech/api/starships`)
    .then((response) => {
      setShips(response.data.results)
      console.log(response.data.results)
    })

  }

  useEffect(fetchShips, [])

    return(

    <div className="App">
      <Starships ships={ships}/>
      
    </div>
    )
  
}

export default App;
