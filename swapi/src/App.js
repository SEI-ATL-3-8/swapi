import './App.css';
import { BroswerRouter  as Router, Route, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Home from './Components/Pages/Home'
import Ships from './Components/Pages/Ships'
import Header from './Components/Partials/Header'
import Ship from './Components/Pages/Ship'



function App() {
  const [allShips, setAllShips] = useState([])

  const fetchShips = () => {
    axios.get(`https://www.swapi.tech/api/starships/`)
    .then((response) => {
      setAllShips(response.data.results)
      console.log(response)
    })
  }
  useEffect(fetchShips, [])

  

  return (


    <div className="App">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/ships" render={() => <Ships allShips={allShips} />} />
      <Route path="/ships/:id">
          <Ship />
      </Route>
    </div>
  );
}

export default App;
