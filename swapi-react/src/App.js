import React from 'react'
import './App.css';
import axios from 'axios'
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
import Home from './components/Home'
import Ships from './components/Ships'
import Ship from './components/Ship'
import Header from './components/Header'
import {useState, useEffect} from 'react'

function App() {

  const [allShips, setAllShips] = useState ([])
 

  const fetchShips = () => {
   
   axios.get("https://www.swapi.tech/api/starships")
   .then((response) => {
    setAllShips(response.data.results) 
   })
  }

 useEffect(fetchShips, [])

 
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/ships" render={() => <Ships allShips={allShips} />} />
      <Route path="/ships/:id"
            render={(props) => {
              console.log(props)
              const ship = allShips.find(ship => ship.uid.toString() === props.match.params.id)
              props = {...props, ...ship}
              return <Ship {...props} />
              }
            } 
         />
    </div>
  );
}

export default App;
