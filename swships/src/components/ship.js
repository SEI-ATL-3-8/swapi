import {useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

const Ship = props => {
    const [ship, setShip] = useState([])

    const getShip = () => {
        axios.get(props.url).then(res => {
            setShip(res.data.result.properties)
        })
    }

    useEffect(getShip, [])

    return(
        <div>
            <h1>Ship Details</h1>
            <h2>
                {ship.name}
            </h2>
            <ul>
                <li>Class: {ship.starship_class}</li>
                <li>Manufacturer: {ship.manufacturer}</li>
                <li>Credits: {ship.cost_in_credits}</li>
                <li>Length: {ship.length}</li>
                <li>Crew: {ship.crew}</li>
                <li>Passengers: {ship.passengers}</li>
                <li>Consumables: {ship.consumables}</li>
            </ul>
            <div>
                <Link to = {`/`}>ships</Link>
            </div>

        </div>
    )
}

export default Ship