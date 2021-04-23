import { Link } from 'react-router-dom'


const Ships = (props) => {
    let ships = props.allShips.map(ship => (
        <div>
            <Link to={`/ships/${ship.uid}`}>{ship.name}</Link>
        </div>
    ))

    return(
        <div>{ships}</div>
    )
}
export default Ships