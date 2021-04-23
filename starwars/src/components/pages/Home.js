import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) =>
{
    return (
        <div>
            <h1>Star Wars Starships</h1>
            {/* {props.starships.map(starship =>
            {
                return (
                    // console.log(starship)
                    <div key={starship.uid}>
                        <Link to={`/starships/${starship.uid}`}>{starship.name}</Link>
                    </div>
                )
            })} */}
            {props.starships}
        </div>
    )
}

export default Home;