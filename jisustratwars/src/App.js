
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/pages/Main'
import ShipsList from './components/pages/ShipsList'
import SingleShip from './components/pages/SingleShip'

function App() {
  const [ships,setShips] =useState([])
  
  
  const fetchShips =()=>{axios.get('https://www.swapi.tech/api/starships')
  .then((response) => {
    setShips(response.data.results)
  })
}
  useEffect(fetchShips, [])



  return (
    <div>
      <Header />
      
      
      <Route 
      path='/ships/:id' 
      render ={(routingInfo) => {
       
        return <SingleShip id={routingInfo.match.params.id}/>
      }}
      />
      
     
      <Route 
      path ='/' 
      exact
      render = {(routingInfo)=>{
        return <ShipsList ships={ships}>

        </ShipsList>
      }}
      />
      
    </div>
  );
}

export default App;
