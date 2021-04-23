import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navbar = ({starships}) => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {starships.map(starship => (
                    <Fragment key={starship.uid}>
              
                    <li>
                        <Link to={`/starships/${starship.uid}`}>{starship.name}</Link>
                    </li>
                 
                    </Fragment>
                ))}
            
            </ul>
        </nav>

    </header>


);

export default Navbar;