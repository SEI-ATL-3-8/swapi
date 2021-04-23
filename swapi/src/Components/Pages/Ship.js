import axios from 'axios'
import { useState } from 'react'

const Ship = (props) => {

    const [ships, setShip] = useState([])
    const fetchShip = () => {
        axios.get(`https://www.swapi.tech/api/starships/${props.uid}`)
        .then((response) => {
          setShip(response.data.results)
          console.log(response)
        })
      }
    return(
        <div>Ship</div>
    )
}
export default Ship