import logo from './logo.svg';
import './App.css';

import axios from 'axios'
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Ship from './components/ship'

function App() {
  const [ships, setShips] = useState([])

  const getAllShips = () => {
    axios.get('https://www.swapi.tech/api/starships')
    .then((res) => {
      console.log(res);
      setShips(res.data.results, [setShips])
    })
  }

  useEffect(getAllShips, [ships])

  return (
    <div className="App">
      <Route path='/' render={ () => <Ship ships={ships} />} exact />
      <Route path='/starships/:id' render= {rProps => {
        const ship = ships.find(ship => ship.uid.toString() === rProps.match.params.id)
        rProps = {...rProps, ...ship}
        return <Ship {...rProps} />
      }} />
    </div>
  );
}

export default App;
