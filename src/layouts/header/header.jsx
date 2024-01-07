import './header.scss';
import Logo from '../../assets/images/logo-mobile.png';
import { NavLink } from "react-router-dom";

function Header () {
   return (
      <header>
         <img className="header_logo" src={Logo} alt="logo-for-mobile-version" />
         <nav>
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