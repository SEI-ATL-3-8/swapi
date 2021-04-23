import axios from 'axios';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Ships from './components/pages/allships'
import Starship from './components/pages/starship'

function App() {
  const apiUrl = 'https://www.swapi.tech/api/starships'

  const[StarShips,setStarShips] = useState([])
  const[ShipIds,setShipIds] = useState([])
  const[ShipInfo,setShipInfo] = useState([])


  const getShips = async () => {
    let arr = []
    const res = await axios.get(`${apiUrl}`)
    setStarShips(res.data.results)
    res.data.results.forEach((ship) =>{
      arr.push(ship.uid)
    })
    setShipIds(arr)
  }
  const getShipInfo = async () => {
    let arr = []
    ShipIds.forEach(async (id) => {
      let res = await axios.get(`${apiUrl}/${id}`)
      arr.push([id, res.data.result.properties])
    })
    await setShipInfo(arr)
  }

  useEffect(()=> {getShips()},[])
  useEffect(()=> {getShipInfo()},[ShipIds])

  
    return (
        <div className="App">
          <Route exact path= '/' render={() => <Ships StarShips= {StarShips} />} />
          <Route path= '/ship/:id' render= {(props) => {
            const ship = ShipInfo.find(ship => ship[0].toString() === props.match.params.id)
            props = {...props,...ship}
            return <Starship {...props} />
          }}/>
      </div>
    );
}

export default App;
