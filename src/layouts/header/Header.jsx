import './header.scss';
import Logo from '../../assets/images/header_logo.png';
import { NavLink } from "react-router-dom";

function Header () {
  return (
    <header className='header_section'>
      <nav className='navBar'>
        <img className='navBar_logo' src={Logo} alt="logo-for-mobile-version" />         
          <ul className='navLink'>
            <li className='navLink_content'> 
              <NavLink className='navLink_content_home' to="/"> Accueil </NavLink>
            </li>
            <li>
              <NavLink className='navLink_content_about' to="About"> A Propos </NavLink>
            </li>
          </ul>
      </nav>
    </header>
  )
}
export default Header;