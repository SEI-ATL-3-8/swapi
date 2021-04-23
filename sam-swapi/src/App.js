import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Starship from './components/Starship'

function App() {
  const [allStarships, setAllStarships] = useState([])

  const fetchStarships = () => {
    axios.get('https://www.swapi.tech/api/starships')
    .then((response) => {
      // console.log(response);
      setAllStarships(response.data.results)
    })
  }

  useEffect(fetchStarships, [])

  return (
    <div className="App">
      <Route exact path = '/' render = {() => <Home allStarships = {allStarships} />}  />
      <Route path = '/starships/:shipId' render = {(routeProps) => {
        const starship = allStarships.find(starship => starship.uid.toString() === routeProps.match.params.shipId)
        routeProps = {...routeProps, ...starship}
        return <Starship {...routeProps} />
        
      }} />
    </div>
  );
}

export default App;
