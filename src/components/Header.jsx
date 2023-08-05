import logo from '../img/Logo.svg';
import Nav from './Nav.jsx';
import Menu from '../img/menu.svg';
import { navMenu } from '../js/navMenu.js';

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Little Lemon" />
            <button className="menu-icon" onClick={navMenu}>
                <img src={Menu} alt="Menu" />
            </button>
            <Nav/>
        </header>
    )
}