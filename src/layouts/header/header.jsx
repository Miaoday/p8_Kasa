import './header.scss';
import logo from '../../assets/images/logo-mobile.png';
import { NavLink } from "react-router-dom";
function header () {
    return (
        <h1>
        <img src={logo} alt="logo-for-moibile-version"></img>
        <ul>
            <li>
                <NavLink to="">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="">A Propos</NavLink>
            </li>
        </ul>
        </h1>
    )
}
export default header;