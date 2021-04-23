import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Ship = (props) => {
    const {id} = useParams()
    const [ship, setShip] = useState([])
    console.log(id)

    const fetchShip = () => {
        axios.get(`https://www.swapi.tech/api/starships/${id}`)
        .then((response) => {
          setShip(response.data.result.properties)
          console.log(response)
        })
      }
      useEffect(fetchShip, [id])
      
    return(
        <div>
            <div>{ship.name}</div>
            <div>Cost: {ship.cost_in_credits}</div>
            <div>Crew Size: {ship.crew}</div>
            <div>Model name: {ship.model}</div>


        </div>
    )
}
export default Ship