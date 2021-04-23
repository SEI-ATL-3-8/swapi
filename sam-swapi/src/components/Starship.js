import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Starship = (props) => {
    const [oneStarship, setOneStarship] = useState({})

    // console.log(props);
    const fetchOneStarship = () => {
        axios.get(`${props.url}`)
        .then((response) => {
        //   console.log(response.data.result.properties);
          setOneStarship(response.data.result.properties)
        })
      }
    
      useEffect(fetchOneStarship, [])

    // console.log(props);
    return (
        <div className = 'detailContainer' >
            <h1>Starship Details</h1>
            <h2>
                {oneStarship.name}
            </h2>
            <ul>
                <li>Starship Class: {oneStarship.starship_class}</li>
                <li>Manufacturer- {oneStarship.manufacturer}</li>
                <li>Cost in Credits- {oneStarship.cost_in_credits}</li>
                <li>Length- {oneStarship.length}</li>
                <li>Crew- {oneStarship.crew}</li>
                <li>Passengers- {oneStarship.passengers}</li>
                <li>Consumables- {oneStarship.consumables}</li>
            </ul>

            <Link to = {`/`}>Back to Starship List</Link>

        </div>
    )
}

export default Starship;