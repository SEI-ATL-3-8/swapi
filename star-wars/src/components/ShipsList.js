import { Link } from 'react-router-dom'

const ShipsList = (props) => {
  return (
    <div>
      {props.ships.length > 0 ?
        <ul>
          {props.ships.map((ship) => {
            return (
              <li key={ship.uid}>
                <Link to={`/ships/${ship.uid}`}>
                  {ship.name}
                </Link>
              </li>
            )
          })}
        </ul>
        :
        <p>Loading...</p>
      }

    </div>
    
    
  )
}

export default ShipsList
