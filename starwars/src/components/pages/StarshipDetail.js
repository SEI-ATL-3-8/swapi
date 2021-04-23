import React, { Component } from 'react';

const StarshipDetail = (props) =>
{
    return (
        <div>
            <h1>Model: {props.name}</h1>
            <h2>Class: {props.starship_class}</h2>
            <h3>Manufacturer: {props.manufacturer}</h3>
            <p style={{font:"16px Arial;"}}>Price: {props.cost_in_credits}</p>
        </div>
    )
}

export default StarshipDetail;