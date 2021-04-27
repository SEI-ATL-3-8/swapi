import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home'
import AllStarships from './components/pages/AllStarship'
import Starship from './components/pages/Starship'
import shipDetails from './data/ship-details'

function App() {
  const [AllShips, setAllShips] = useState([])
  const [shipDetail, setShipDetail] = useState([])

  const fetchAllShips = () => {
    axios.get(`https://www.swapi.tech/api/starships/`).then((response)=>{
      // console.log(response);
      setAllShips(response.data.results)
    })
  }

  useEffect(fetchAllShips, [])


const idNum = AllShips.map( data => {
  return data.uid
})
console.log(idNum);


  return (
    <div className="App">
     <Header />
     <Route exact path='/' component={Home} />
     <Route path='/ships' render={() => <AllStarships ships={AllShips} />} />
     <Route path='/ships/:id'
      render=
      {(props) =>
      {
        // console.log(props);
        const ship = AllShips.find(ship => ship.uid.toString() === props.match.params.id)
        props = {...props, ...ship}
        // console.log(ship)
        return <Starship {...props}/>
      }}  
    />
    </div>
  );
}

export default App;
