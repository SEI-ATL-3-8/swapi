import { Link } from 'react-router-dom'

const AllStarships = (props) => {
    let ships = props.ships.map(ship => (
        <li>
            <Link to={`/ships/${ship.uid}`}>{ship.name}</Link>
        </li>
    ))

    return(
        <div>
            <ul>
                {ships}
            </ul>
        </div>
    )
}

export default AllStarships