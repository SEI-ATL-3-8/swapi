import React from 'react'
import { Link } from 'react-router-dom'

const Ships = (props) => {
    let ships = props.allShips.map((ship, i) => (
        <li>
            <Link to={`/ships/${ship.id}`}>{ship.name}</Link>
        </li>
    ))
    return (
        <ul>{ships} </ul>
    )
}

export default Ships
