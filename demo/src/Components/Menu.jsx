import { Link } from "react-router-dom";
import './Navbar.css';

export const Menu = () => {
    return (
    <>
    <div>  
    <nav className="main-nav">
     <div className="navbar-nav">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
      </div>
    </nav> 
    </div>
    </>
    )
}

export default Menu;