
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AllSpaceShips from './components/AllSpaceShips';
import OneShip from './components/OneShip'

function App() {
  const [allSpaceShips, setAllSpaceShips] = useState([])

  const fetchSpaceShips = () => {
    axios.get('https://www.swapi.tech/api/starships')
      .then((response) => { setAllSpaceShips(response.data.results) })
  }

  useEffect(fetchSpaceShips, [])

  return (
    <div className="App">
      <Route exact path='/' render={() => <AllSpaceShips allSpaceShips={allSpaceShips} />} />
      <Route path='/ships/:id'
        render={(props) => {
          const ship = allSpaceShips.find(ship => ship.uid.toString() === props.match.params.id)
          props = { ...props, ...ship }
          return <OneShip {...props} />
        }} />
    </div>
  );
}

export default App;
