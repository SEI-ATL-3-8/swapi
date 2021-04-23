import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'
const API_URL = 'https://www.swapi.tech/api/starships'



function Starship(props) {
   const [theShip, setTheShip] = useState([])

   console.log(props);
   const getShip = () => {
      axios.get(`${props.url}`)
      .then(res => {
         console.log(res.data);
         setTheShip(res.data.result.properties)
      })
      .catch(error => console.error(error))
   }
   
   useEffect(getShip, [props.ship])

   return (
      <div className="starship">
         <h1>{theShip.name}</h1>
         <p>Manufacturer: {theShip.manufacturer}</p>
         <p>Model: {theShip.model}</p>
         <p>Class: {theShip.starship_class}</p>
         <p>Passengers: {theShip.passengers}</p>
         <p>Length: {theShip.length}</p>
         <p>Capacity: {theShip.cargo_capacity}</p>
         <p>Hyperdrive Rating: {theShip.hyperdrive_rating}</p>
         <Link to="/" >clear</Link>
      </div>
   )
}

export default Starship