import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home'
import AllStarships from './components/pages/AllStarship'


function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <AllStarships />
    </div>
  );
}

export default App;
