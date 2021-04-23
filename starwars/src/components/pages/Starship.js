import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import env from 'react-dotenv';
import axios from 'axios';

const Starship = (props) =>
{
    function getDetails ()
    {
        // get ship details from API
        axios.get(`${env.BACKEND_URL}/starships/${props.uid}`).then((res) =>
        {
          const ship = res.data.result.properties;
          props.setShipDetails(ship);
        })
    }

    return (
        <div key={props.uid} onClick={getDetails}>
            <Link to={`/starships/${props.uid}`}>{props.name}</Link>
        </div>
    )
}

export default Starship;