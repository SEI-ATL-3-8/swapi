import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Starships from './components/Starships'


function App() {
  const [allStarships, setAllStarships] = useState([])
  const fetchStarships = async () => {
    try {
    const response = await axios.get('https://www.swapi.tech/api/starships')
    setAllStarships(response.data.results)
    } catch (error){
      console.log(error)
    }
  }
  
  useEffect(()=> {
    fetchStarships()
  },[])


  return (
    <div className="App">
     <Starships starships={allStarships}/>
     {/* <Route exact path='/' component={Home} /> */}
     {/* <Route exact path='/' render={() => <allStarships allStarships={allStarships}/>}/> */}
    </div>
  );
}

export default App;
