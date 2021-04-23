import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const OneStarShip = (props) => {
    const [oneShip, setOneShip] = useState({})  
    console.log(props)

    const getOneShip = () => {
        axios.get(`${props.url}`).then
        (response => {setOneShip(response.data.result.properties)}
        )}

useEffect(getOneShip, [])

    return (
        <div>
            <h1>Name: {oneShip.name}</h1>
            <h2>Model: {oneShip.model}</h2>
            <h3>Max Speed: {oneShip.max_atmosphering_speed}</h3>
            <h4>Cost: {oneShip.cost_in_credits} Credits</h4>
            <Link to = {'/'}>Home</Link>

        </div>
    )
}
export default OneStarShip