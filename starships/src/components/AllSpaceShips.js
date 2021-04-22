import {Link} from 'react-router-dom'
const AllSpaceShips = (props) => {
    return(
        <div>
            {props.allSpaceShips.map((spaceShip) => {
                return (
                <div key = {spaceShip.uid}>
                    <Link to={`/ships/${spaceShip.uid}`}>{spaceShip.name}</Link>
                    {/* <h2>{spaceShip.name}</h2> */}
                </div>
                )
            })}
        </div>
    )
}
export default AllSpaceShips