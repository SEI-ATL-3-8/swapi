import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <Link to="/">Go to Home Page</Link>{' | '}
            <Link to="/ships">Ships Page</Link>{' | '}
        </nav>
    </header>
  )
}

export default Header