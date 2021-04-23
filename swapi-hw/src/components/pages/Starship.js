const Starship = (props) =>{
    
    return(
        <div>
            <h3>{props.name}</h3>
            <h6>{props.model}</h6>
            <h6>{props.manufacturer}</h6>
            <h6>{props.passengers}{' '}persons</h6>
        </div>
    )
}


export default Starship