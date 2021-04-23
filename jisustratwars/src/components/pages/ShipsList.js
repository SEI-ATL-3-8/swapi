import {Link} from 'react-router-dom'


const ShipsList =(props)=>{
    return(
        <ul>
            {props.ships.map((ship) =>{
                 return(
                    <li key={ship.uid}>
                    <Link to={`/ships/${ship.uid}`}>
                        {ship.name}
                    </Link>
                     </li>
                    )
                    })}

        </ul>
        
    )
}

export default ShipsList