import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Fragment } from 'react';

export default function Starship({starships}) {
    const { id } = useParams();
    const starShipInfo = starships.find(starship => starship.uid === id);
    const [starship, setStarship] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        getStarship();
    }, [id]);

    useEffect(() => {
      setLoaded(true);
    },[ starship ]);


    const getStarship = async () => {
      
        const data = await fetch(starShipInfo.url)
        const response = await data.json();
        setStarship(response.result.properties);
    };
    
    console.log(starship, loaded);
    return (
        <div className="container">
            {loaded 
                ? 
            <Fragment>
            <h1>{starship.name}</h1>
            <h2>Class:{starship.starship_class}</h2>
            <h2>Crew:{starship.crew}</h2>
            <h2>Credits:{starship.cost_in_credits}</h2>
            </Fragment>
                :
            <h1>Loading</h1>   
                
            
            }


        </div>
    )
}