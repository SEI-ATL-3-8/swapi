import {useState, useEffect} from 'react'
import axios from 'axios'

const Ship = (props) => {

    const [showShip, setShowShip] = useState ([])

    const fetchOneShip = () => {
   
        axios.get("https://www.swapi.tech/api/starships/2")
        .then((response) => {
          console.log(response.data.results)
         setShowShip(response.data.result.properties) 
        })
       }
      
      useEffect(fetchOneShip, [])
      
    return (
        <div>
            <h2>Model: {showShip.model}</h2>
            <p>Manufacturer: {showShip.manufacturer}</p>
            <p>Cost: ${showShip.cost_in_credits}</p>
            <p>Length: {showShip.length}</p>
            <p>Passengers: {showShip.passengers}</p>
        </div>
    )
}

export default Ship