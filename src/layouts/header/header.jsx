import './header.scss';
import Logo from '../../assets/images/logo_mobile.png';
import { NavLink } from "react-router-dom";

function Header () {
   return (
      <header>
         <nav className='header_nav'>
         <img src={Logo} alt="logo-for-mobile-version" />         
            <ul>
               <li> 
                  <NavLink to="/p8_kasa" /> Accueil
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