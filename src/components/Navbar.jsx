import '../components/Navbar.css'
import NavBarLogo from '../assets/LogoMaker-removebg-preview.svg'

const RefreshIcon = () => {
    window.location.reload(false);
}

export const Navbar = () => {
    return (
        <div className="navContainer" id="navbar-main">
            <nav className="nav nav-main">
                <ul className="nav-list">
                    <img className="nav nav-image" src={NavBarLogo} alt="" onClick={RefreshIcon} />
                    <li className="nav nav-home"> Home </li>
                    <li className="nav nav-about">About Me</li>
                    <li className="nav nav-contacts">Contacts</li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;