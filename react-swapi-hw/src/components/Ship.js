const Ship = (props) => {

    return (
        <div>
        <h2>{props.name}</h2>
        <p>{props.model}</p>
        <p>{props.manufacturer}</p>
        <p>{props.passengers}{' '}persons</p>
    </div>
)
}

export default Ship
