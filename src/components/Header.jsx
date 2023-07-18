import logo from '../img/Logo.svg';
import Nav from './Nav.jsx';

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Little Lemon" />
            <Nav />
        </header>
    )
}