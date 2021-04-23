import {Link} from 'react-router-dom'

const Starships = (props) =>{

    return(
        <ul>
        {
          props.starships.map(items =>( 

           <div key = {items.uid}>
           <Link to = {`/starships/${items.uid}`}>
                 <li>{items.name}</li>    
           </Link> 
           </div>
          ))
        }
      </ul>
    )
}
export default Starships