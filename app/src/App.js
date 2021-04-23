import './App.css';
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

import Starship from './components/views/Starship'
import Navbar from './components/partials/Navbar'

const API_URL = 'https://www.swapi.tech/api/starships'

function App() {
	const [ships, setShips] = useState([])
   const [ship, setShip] = useState({})

	const getStarships = () => {
		axios.get(`${API_URL}`)
			.then(res => {
				setShips(res.data.results)
			})
	}
	useEffect(getStarships, [])

	return (
		<div className="App">

			<Navbar ships={ships} />

			<Route path="/ships/:shipId" render={routeProps => {
				const theShip = ships.find(ship => ship.uid.toString() === routeProps.match.params.shipId)
				setShip(theShip)
				routeProps = {...routeProps, ...theShip}
				console.log(routeProps)
				return <Starship {...routeProps} ship={ship} setShip={setShip} />
			}} />
		</div>
	);
}

export default App;
