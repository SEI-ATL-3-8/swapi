import SingleShipDetails from '../partials/SingleShipDetails';
import SingleShipImage from '../partials/SingleShipImage';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const SingleShipArea = (props) => {
	const [shipDetails, setShipDetails] = useState([]);
	const [shipPilots, setShipPilots] = useState([]);

	const getSingleShipAPI = () => {
		axios.get(`${props.routingProps.url}`).then((response) => {
			const data = response.data.result.properties;
			const pilots = response.data.result.properties.pilots;

			setShipDetails(data);

			if (pilots.length !== 0) {
				setShipPilots(pilots);
			}
		});
	};

	useEffect(getSingleShipAPI, []);

	return (
		<div className="singleShipArea">
			<Link to="/">
				<h3>Back to all ships, you may go.</h3>
			</Link>
			<SingleShipImage
				image={props.routingProps.image}
				name={props.routingProps.name}
			/>
			<SingleShipDetails shipDetails={shipDetails} />
		</div>
	);
};

export default SingleShipArea;
