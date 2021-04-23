import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

import Starships  from './component/starshipPage'
import Singlestarship from './component/singlestarship'

function App() {
const [starships, setStarships] = useState([])
  const fetchShips = () =>{

    axios.get('https://www.swapi.tech/api/starships')
    .then((response) =>{
       console.log(response.data.results)
      setStarships(response.data.results)
    })
  }

  useEffect(fetchShips,[])
  return ( 
    <div className="App">
      <Link to = '/starships'><h1>All Star Ships</h1></Link>
      <Route path = '/starships' render = {() => <Starships  starships = {starships}/>}/>
      <Route path = '/starships/:id' render = { (props) =>
        {
          const singleship = starships.find(starships =>
            starships.uid.toString() === props.match.params.id) 
            props = {...props, ...singleship}
             return <Singlestarship{...props} />
            console.log(props)

        }}/>
    </div>
  );
}

export default App;
