import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SingleShip = (props) => {
  const [ship, setShip] = useState({})

  const fetchShip = () => {
    axios.get(`https://www.swapi.tech/api/starships/${props.id}`)
    .then((response) => {
      setShip(response.data.result)
    })
  }
  useEffect(fetchShip, [])
  
  return (
    <div>
      {ship.properties === undefined ? 
      <p>Loading...</p>
      :
      <div>
        <p>{ship.properties.name}</p>
        <p>{ship.properties.model}</p>
        <p>{ship.properties.manufacturer}</p>
      </div>
      }
      
      <Link className="testing" to="/">Back to All Ships</Link>
      {/* <a href="/">Back to All Ships</a> */}
    </div>
  )
}

export default SingleShip