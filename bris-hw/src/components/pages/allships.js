import { Link } from 'react-router-dom'

const Ships = (props) => {
    return (
      <div>

        <h1>Starships</h1>
        <div className = 'container'>
            {props.StarShips.map(ship => (
                <Link to = {`/ship/${ship.uid}`} key = {ship.uid}>{ship.name}</Link>
            ))}
        </div>
       
      </div>
    )
}

export default Ships