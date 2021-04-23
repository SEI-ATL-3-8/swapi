import { useState, useEffect } from 'react'
import { API_URL } from '../App'
import axios from 'axios'
const StarshipPage = (props) => {
    const [starship, setStarship] = useState({})
    const [starshipId, setStarshipId] = useState(props)
    const getStarshipInfo = async (starshipId) => {
        const starship = await axios.get(`${API_URL}/starships/${starshipId.data.match.params.id}`)
        setStarship(starship.data.result);
    }

    useEffect(() => {
        setStarshipId(props)
    }, [props])

    useEffect(() => {
        getStarshipInfo(starshipId)
    }, [starshipId])

    return (
        <div>
            <h2>{starship.properties.name}</h2>
            <p>{starship.properties.model}</p>
            <p>{starship.properties.model}</p>
            <p>{starship.properties.manufacturer}</p>
        </div>
    )
}
export default StarshipPage