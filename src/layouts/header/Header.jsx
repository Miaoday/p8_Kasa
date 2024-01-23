import './header.scss';
import Logo from '../../assets/images/header_logo.png';
import { NavLink } from "react-router-dom";

function Header () {
  return (
    <header className='header_section'>
      <nav className='navbar'>
        <img className='navbar_logo' src={Logo} alt="logo-for-mobile-version" />         
          <ul>
            <li> 
              {/* <NavLink to="/"> Accueil 
              </NavLink> */}
              <NavLink to="/" className={(nav) => (nav.isActive ? "link-active" : undefined)}> 
              Accueil 
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="About"> A Propos
              </NavLink> */}
              <NavLink to="About"className={(nav) => (nav.isActive ? "link-active" : undefined)} > A Propos
              </NavLink>
            </li>
          </ul>
      </nav>
    </header>
  )
}
export default Header;