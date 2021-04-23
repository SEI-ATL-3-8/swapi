import {Link} from 'react-router-dom';

const AllShipItem = (props) => {
	return (
		<Link to={`/${props.id}`}>
			<div className="ship-item-box">
				<img
					className="ship-thumbnail"
					src={`${props.image}`}
					alt={props.name}
				/>
				<span className="ship-item-name">{props.name}</span>
			</div>
		</Link>
	);
};

export default AllShipItem;
