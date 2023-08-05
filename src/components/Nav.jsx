// import { HashLink as LinkDiv } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        
        <nav className="nav-hidden">
            <ul className='navMenu-hidden' id='MenuState'>
                <li>
                    <Link to="/">Home</Link >
                </li>
                <li>
                    <Link to="/about">About</Link >
                </li>
                <li>
                    <Link to="/menu">Menu</Link >
                </li>
                <li>
                    <Link to="/booking-a-table">Reservations</Link >
                </li>
                <li>
                    <Link to="/order">Order Online</Link >
                </li>
                <li>
                    <Link to="/login">Login</Link >
                </li>
            </ul>
        </nav>
    )
}
//I want to scroll to about div in the Main component