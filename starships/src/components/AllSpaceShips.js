import {Link} from 'react-router-dom'
const AllSpaceShips = (props) => {
    return(
        <div>
            {props.allSpaceShips.map((spaceShip) => {
                return (
                <div key = {spaceShip.uid} className = "every-ship">
                    <Link to={`/ships/${spaceShip.uid}`}><h1>{spaceShip.name}</h1></Link>
                </div>
                )
            })}
        </div>
    )
}
export default AllSpaceShips