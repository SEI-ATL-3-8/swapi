
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import ShipImages from './data/ShipImages';
import AllShipArea from './components/pages/AllShipArea';
import SingleShipArea from './components/pages/SingleShipArea';
import LoadMsg from './components/partials/LoadMsg';
import axios from 'axios';

function App() {
	const [starships, setStarships] = useState([]);
	const [images, setImages] = useState(ShipImages);

	const url = 'https://www.swapi.tech/api/starships/';

	const mergeArray = (arr1, arr2) => {
		return arr1.map((item, i) => {
			if (item.uid === arr2[i].uid) {
				return Object.assign({}, item, arr2[i]);
			}
		});
	};

	const getAllStarships = () => {
		axios.get(`${url}`).then((response) => {
			const array = response.data.results;
			const merged = mergeArray(array, images);

			setStarships(merged);
		});
	};

	useEffect(getAllStarships, []);

	return (
		<div className="swapi-app">
			{starships.length === 0 && <LoadMsg />}

			{starships.length > 0 && (
				<header>
					<h1>Star Wars Spaceships!</h1>
				</header>
			)}
			{starships.length > 0 && (
				<Route
					exact
					path="/"
					render={() => <AllShipArea starships={starships} />}
				/>
			)}

			<Route
				path="/:id"
				render={(routingProps) => {
					const ship = starships.find(
						(ship) => ship.uid.toString() === routingProps.match.params.id
					);
					routingProps = {...routingProps, ...ship};
					return <SingleShipArea routingProps={routingProps} />;
				}}
			/>
		</div>
	);
}

export default App;
