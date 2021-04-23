import { Link } from 'react-router-dom'

const Ships = (props) => {
    return (
      <div>

        <h1>Starships</h1>
        <div className = 'container'>
            {props.StarShips.map(ship => (
                <div key = {ship.uid} className = 'ship'>
                    <Link to = {`/ship/${ship.uid}`}>{ship.name}</Link>
                </div>
            ))}
        </div>
       
      </div>
    )
}

export default Ships