import './App.css';

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'

import ShipsList from './components/ShipsList'
import SingleShip from './components/SingleShip'

function App() {
  const [ships, setShips] = useState([])

  const fetchShips = () => {
    axios.get('https://www.swapi.tech/api/starships')
    .then((response) => {
      setShips(response.data.results)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  useEffect(fetchShips, [])
  
  return (
    <div>
      <Route
        path="/"
        exact
        render={() => {
          return <ShipsList ships={ships} />
        }}
      />

      {/* Route w/ closing tag */}
      {/* equivalent to above */}
      {/* if you wanted access to routingInfo, you would need useParams hook */}
      {/* <Route path="/ships/:id">
        <ShipsList ships={ships} />
      </Route> */}


      {/* w/ component, cannot pass in any props */}
      {/* <Route path="/" component={ShipsList} /> */}
      
      <Route
        path="/ships/:id"
        render={(routingInfo) => {
          // alternative method:
          // find the ship from its allShips array
          // by matching the routingInfo's id parameter to those ships
          // and then pass the whole ship in as a prop
          
          return <SingleShip id={routingInfo.match.params.id} />
        }}
      />
    </div>
  );
}

export default App;
