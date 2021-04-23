import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import AllShips from './components/AllShips'
import StarshipPage from './components/StarshipPage'

import './App.css';


function App() {
  const [alLShips, storeAllShips] = useState([])
  const FetchShips = () => {
    axios.get(`https://www.swapi.tech/api/starships/`).then((response) => {
      storeAllShips(response.data.results)
    })
  }

  useEffect(FetchShips, [])

  return (
    <div className="App">
      hi
    </div>
  );
  
}

export default App;
