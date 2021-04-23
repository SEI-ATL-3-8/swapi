import  { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

const Starship = (props) => {
    const[shipName,setShipName] = useState('')
    const[shipInfo,setShipInfo] = useState([])

    const handleShip = () => {
        let arr = []
        for(let key in props[1]){
            console.log(key);
            let title = key.charAt(0).toUpperCase() + key.slice(1).replaceAll('_', ' ');
            if(key !== 'created' && key !== 'edited' && key !== 'pilots' && key !== 'name' && key !== 'url' ){
                arr.push(`${title}: ${props[1][key]}`)  
            }else if(key === 'name'){
                setShipName(props[1][key])
            }
        }
        setShipInfo(arr)
    }

    useEffect(handleShip,[])

    return (
        <div>
            <h1> {shipName} </h1>
            <div className = 'container'>
            {shipInfo.map((info, i ) => (
                <div key = {i}> 
                    <div className = 'info'> {info} </div>
                </div>
            ))}
        </div>
            <Link className = 'back' to= '/'>Go Back</Link>
        </div>
    )
}

export default Starship