import axios from 'axios';
// import { useState, useEffect } from 'react'
import { useEffect } from 'react';

let data = []
let name = ('')
let model = ('')
let manufacturer = ('')
let passengers = ('')
const Singlestarship = (props) =>{
        const fetchSingleship = () =>{

                axios.get(`${props.url}`).then((response)=>{
                    console.log (response.data.result.properties)
                    name = response.data.result.properties.name
                    model = response.data.result.properties.model
                    manufacturer = response.data.result.properties.manufacturer
                    passengers = response.data.result.properties.passengers
                })
        }

useEffect(fetchSingleship, [props])
return(

    <div>
        {console.log (data)}
        <h2>{`Name: ${name}`}</h2>
        <h2>{`Model: ${model}`}</h2>
        <h2>{`Manufacturer: ${manufacturer}`}</h2>
        <h2>{`Passengers: ${passengers}`}</h2>

    </div>
)


}

export default Singlestarship