import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>{' | '}
            <Link to="/ships">All Ships</Link>
        </nav>
    </header>
  )
}

export default Header 
