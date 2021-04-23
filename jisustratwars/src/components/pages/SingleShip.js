import axios from 'axios'
import {Link} from'react-router-dom'
import { useState, useEffect } from 'react'

const SingleShip = (props) =>{
    const [ship, setShip] =useState({})

    const fetchShip = () => {
        axios.get(`https://www.swapi.tech/api/starships/${props.id}`)
        .then((response) => {
            setShip(response.data.result)
        })
    }
    useEffect(fetchShip, [])

    return(
        <div>
            {ship.properties=== undefined?
            <p>loading</p>
            :
            <div>
                {ship.properties.name}
                {'    |   '}
                {ship.properties.model}

            </div>
            }
          <Link to ='/'> back to main
          </Link>
        </div>
    )
}

export default SingleShip