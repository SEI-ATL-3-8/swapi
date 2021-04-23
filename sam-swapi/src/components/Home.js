import { Link } from 'react-router-dom'

const Home = (props) => {

    const starshipList = props.allStarships.map(starship => (
        <li className = 'starship-list' >
            <Link to = {`/starships/${starship.uid}`}>{starship.name}</Link>
        </li>
    ))

    return (
        <div>
            <h1>Choose a Starship Below For More Info...</h1>
            <ul>
                {starshipList}
            </ul>
        </div>
    )
}

export default Home