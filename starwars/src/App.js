import { useEffect, useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Starship from './components/pages/Starship';
import StarshipDetail from './components/pages/StarshipDetail';

function App() {
  useEffect(() =>
  {
    async function getShips ()
    {
      const res = await axios.get(`${env.BACKEND_URL}/starships`);
      // console.log(res.data.results);
      const ships = res.data.results.map(ship =>
      {
        return <Starship setShipDetails={setShipDetails} {...ship}/>;
      })
      setStarships(ships);
    }
    getShips();
  }, [])

  const [starships, setStarships] = useState([]);
  const [shipDetails, setShipDetails] = useState([]);

  return (
    <Router>
      <main>
        <Link to="/starships">Starship List</Link>
        <Route exact path="/starships" render={() => <Home starships={starships} setStarships={setStarships}/>}/>
        <Route path="/starships/:id" render={() => {
          console.log(shipDetails)
          return <StarshipDetail {...shipDetails}/>
        }}/>
      </main>
    </Router>
  );
}

export default App;
