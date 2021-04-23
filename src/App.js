import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'
import StarshipPage from './components/StarshipPage'

export const API_URL = 'https://www.swapi.tech/api'
function App() {

  const [allStarships, setStarships] = useState([])

  const fetchStarship = async () => {
    const starships = await axios.get(`${API_URL}/starships`)
    setStarships(starships.data.results)
  }
  useEffect(() => {
    fetchStarship()
  }, [])
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => {
          return (
            <div>
              {allStarships.length === 0 ?
                <p>Loading...</p> :
                (
                  <ul>
                    {allStarships.map(starship => {
                      return (
                        <li key={starship.uid}><Link to={`/ships/${starship.uid}`}>{starship.name}</Link></li>
                      )
                    })}
                  </ul>
                )
              }
            </div>
          )
        }} />
        <Route path="/ships/:id" render={(props) => <StarshipPage id={props.match.params.id} />} />
      </div>
    </Router>
  );
}

export default App;
