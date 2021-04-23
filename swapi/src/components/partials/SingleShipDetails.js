const SingleShipDetails = (props) => {
    return (
        <div className="ship-main-box-text">
            <span className="ship-main-text">Model: {props.shipDetails.model}</span>
            <span className="ship-main-text">Manufacturer: {props.shipDetails.manufacturer}</span>
            <span className="ship-main-text">Cost: {props.shipDetails.cost_in_credits} credits</span>
            <span className="ship-main-text">Speed: {props.shipDetails.MGLT} megalights</span>
        </div>
    )
}

export default SingleShipDetails