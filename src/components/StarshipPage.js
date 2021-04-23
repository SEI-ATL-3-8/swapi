import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../App'
import axios from 'axios'
const StarshipPage = (props) => {
    const [starship, setStarship] = useState({})
    const getStarshipInfo = async () => {
        const starship = await axios.get(`${API_URL}/starships/${props.id}`)
        setStarship(starship.data.result);
    }

    useEffect(() => {
        getStarshipInfo()
    }, [])

    return (
        <div>
            {starship.properties === undefined ?
                <p>loading...</p> :
                (<div>
                    <h2>{starship.properties.name}</h2>
                    <p>{starship.properties.model}</p>
                    <p>{starship.properties.model}</p>
                    <p>{starship.properties.manufacturer}</p>
                </div>)
            }
            <Link to="/">Go back to all ships</Link>
        </div>)
}
export default StarshipPage