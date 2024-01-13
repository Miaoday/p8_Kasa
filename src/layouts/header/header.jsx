import './header.scss';
import Logo from '../../assets/images/logo_mobile.png';
import { Link } from "react-router-dom";

function Header () {
   return (
      <header>
         <nav className='header_nav'>
         <img src={Logo} alt="logo-for-mobile-version" />         
            <ul>
               <li> 
                  <Link to="/"> Accueil 
                  </Link>
               </li>
               <li>
                  <Link to="About"> A Propos
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}
export default Header;