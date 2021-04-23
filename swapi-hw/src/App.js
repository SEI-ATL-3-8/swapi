import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home'
import AllStarships from './components/pages/AllStarship'


function App() {
  const [AllShips, setAllShips] = useState([])

  const fetchAllShips = () => {
    axios.get('https://www.swapi.tech/api/starships/').then((response)=>{
      // console.log(response);
      setAllShips(response.data.results)
    })
  }

  useEffect(fetchAllShips, [])



  return (
    <div className="App">
     <Header />
     <Route exact path='/' component={Home} />
     <Route path='/ships' render={() => <AllStarships ships={AllShips} />} />
    </div>
  );
}

export default App;
