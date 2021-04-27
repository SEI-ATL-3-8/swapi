import axios from 'axios'
import { useState, useEffect } from 'react'

const Starship = (props) =>{
    const [oneShip, setOneShip] = useState([])
console.log(props);

    const fetchOneShip = () => {
        axios.get(`https://www.swapi.tech/api/starships/${props.uid}`).then((response)=>{
        //   console.log(response);
          setOneShip(response.data.result.properties)
        })
      }

    useEffect(fetchOneShip, [])

    return(
        <div>

            <h3>Name:{' '}{oneShip.name}</h3>
            <h6>Model:{' '}{oneShip.model}</h6>
            <h6>Manufacturer:{' '}{oneShip.manufacturer}</h6>
            <h6>Capacity:{' '}{oneShip.passengers}{' '}persons</h6>
        </div>
    )
}


export default Starship