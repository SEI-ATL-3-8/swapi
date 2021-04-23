import { Link } from 'react-router-dom'

function Navbar(props) {
   return (
      <nav>
         <ul>
            {props.ships.map(ship => {
               return (
                  <span key={ship.uid}>
                     <Link to={`/ships/${ship.uid}`}>
                        {ship.name}
                     </Link>
                  </span>
               )
            })}
         </ul>
      </nav>
   )
}

export default Navbar