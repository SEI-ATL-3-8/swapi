
import './App.css';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Starship from './components/Starship';
import { useHistory, useParams } from 'react-router-dom';





function App() {

  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStarShips = async () => {
      const response = await fetch('https://www.swapi.tech/api/starships');
      const data = await response.json();;
      setStarships(data.results);
  }
  
  
  useEffect(() => setLoading(false), [starships]);
  useEffect(() => getStarShips(), []);



  return (
    <div className="App">
      {loading ?  <h1>'Loading...'</h1> :  <Navbar starships={starships}/>}
     


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/starships/:id" >
          <Starship starships={starships} />
        </Route>
     

      </Switch>
    </div>
  );
}

export default App;
