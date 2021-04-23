const SingleShipImage = (props) => {
    return (
        <div className="ship-main-box">
            <img className="ship-main-img" src={`${props.image}`} alt={props.name} />
            <span className="ship-main-name">{props.name}</span>
        </div>
    )
}

export default SingleShipImage