import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Ship(props) {

    const [shipInfo, setShipInfo] = useState([]);

    function fetchShipInfo(){
        

        axios.get(props.url)
        .then((response) => {
            setShipInfo(response.data.result.properties)
           
        })
    }

    useEffect(fetchShipInfo, [])

    return (
        <div className="shipInfo">
            <div className="label">
                Model: <div className="detail">{shipInfo.model}</div>
            </div>
            <div className="label">
                Starship Class: <div className="detail">{shipInfo.starship_class}</div>
            </div>
            <div className="label">
                Manufacturer: <div className="detail">{shipInfo.manufacturer}</div>
            </div>
            <div className="label">
                Hyperdrive Rating: <div className="detail">{shipInfo.hyperdrive_rating}</div>
            </div>
            <div className="label">
                Cost: <div className="detail">{shipInfo.cost_in_credits}</div>credits
            </div>
        </div>
    )
}
