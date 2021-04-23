import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Ship from '../components/Ship'


export default function Starships(props) {
    return (
        <Router>
        <div>
            {props.ships.map((ship, uid) => {
                return <div key={uid}>
                    <Link to={'/ships/'+ship.uid}>{ship.name}</Link>
                    <Route path={'/ships/'+ship.uid} render={()=><Ship url={ship.url}/>} />
                    </div>
            })}
        </div>
        </Router>
    )
}
