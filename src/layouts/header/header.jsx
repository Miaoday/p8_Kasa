import './header.scss';
import Logo from '../../assets/images/logo-mobile.png';
import { NavLink } from "react-router-dom";

function Header () {
   return (
      <header className='header'>
         <nav className='header_nav'>
         <img className='header_logo' src={Logo} alt="logo-for-mobile-version" />
         
            <ul>
               <li> 
                  <NavLink to="/" /> Accueil
               </li>
               <li>
                  <NavLink to="/about"/> A Propos
               </li>
            </ul>
         </nav>
      </header>
   )
}
export default Header;