import { Link } from 'react-router-dom'




const AllShipItem = (props) => {

    return (
        <Link to={`/${props.id}`}>
            <div className="ship-item-box">
                <span className="ship-item-name">{props.name}</span>
                <img src={`${props.image}`} alt={props.name} />
            </div>
        </Link>    
    )
}

export default AllShipItem