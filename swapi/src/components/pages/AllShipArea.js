import AllShipItem from '../partials/AllShipItem'

const AllShipArea = (props) => {
    return (
        <div className="allShipArea">
            {props.starships.map((ship, i) => {
                return (
                    <AllShipItem key={i} name={ship.name} id={ship.uid} image={ship.image} />
                )
            })}
        </div>
    )
}

export default AllShipArea