import React from 'react'
import {Link} from 'react-router-dom'
const Starships = ({starships}) => {
    return (
        <div>
           {starships.map((ship, i) => {
               return(
                   <div key={i}>
                       <ul>
               <li>{ship.name}</li>
               {/* <Link to={`/ships/${starships.uid}`}>{starships.name}</Link> */}
                       </ul>
                   </div>
               )
           })} 
        </div>
    )
}

export default Starships
